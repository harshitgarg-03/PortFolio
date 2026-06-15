import { useState } from 'react';
import { ExternalLink, RotateCw, X, Play } from 'lucide-react';
import type { Project } from '../data/projects';

interface ProjectPreviewProps {
  project: Project;
  height?: number;
  zoom?: number;
  showChrome?: boolean;
  viewportWidth?: number;
}

export function ProjectPreview({
  project,
  height = 180,
  zoom = 0.28,
  showChrome = true,
  viewportWidth,
}: ProjectPreviewProps) {
  const [isInteractive, setIsInteractive] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const previewWidth = viewportWidth ? `${viewportWidth}px` : `${300 / zoom}%`;
  const previewHeight = showChrome ? `${(height - 24) / zoom}px` : `${height / zoom}px`;

  return (
    <div
      className="group/preview block overflow-hidden relative"
      style={{
        height,
        backgroundColor: project.previewTone,
        color: '#fff',
      }}
    >
      {showChrome && (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="flex h-[24px] items-center gap-1.5 px-3 select-none hover:bg-white/5 transition-colors cursor-pointer"
          style={{
            backgroundColor: 'rgba(8,8,10,0.92)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            textDecoration: 'none',
          }}
          onClick={(e) => {
            // Stop click propagation to cards if any
            e.stopPropagation();
          }}
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#FF5F57' }} />
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#FFBD2E' }} />
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: '#28C840' }} />
          <span
            className="ml-2 truncate"
            style={{ color: 'rgba(255,255,255,0.72)', fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}
          >
            {`${project.url}`}
          </span>
          <ExternalLink className="ml-auto h-3 w-3 opacity-60 hover:opacity-100 transition-opacity text-white" />
        </a>
      )}

      <div
        className="relative overflow-hidden"
        style={{
          height: showChrome ? height - 24 : height,
          boxShadow: showChrome ? 'inset 0 0 0 1px rgba(255,255,255,0.08)' : undefined,
        }}
      >
        <iframe
          key={iframeKey}
          title={`${project.title} preview`}
          src={project.href}
          loading="lazy"
          tabIndex={-1}
          className="absolute left-0 top-0 border-0"
          style={{
            width: previewWidth,
            height: previewHeight,
            transform: `scale(${zoom})`,
            transformOrigin: 'top left',
            pointerEvents: isInteractive ? 'auto' : 'none',
            backgroundColor: project.previewTone,
          }}
        />

        {/* Interactive Toggle Overlay */}
        {!isInteractive && (
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsInteractive(true);
            }}
            className="absolute inset-0 bg-black/45 backdrop-blur-[1px] opacity-0 group-hover/preview:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer z-10"
          >
            <div className="bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full px-4.5 py-2 text-xs font-semibold flex items-center gap-2 transition-all shadow-lg backdrop-blur-md scale-95 group-hover/preview:scale-100 duration-300">
              <Play className="h-3.5 w-3.5 fill-white" />
              <span>Interact Live</span>
            </div>
          </div>
        )}

        {/* Floating Live Controls */}
        {isInteractive && (
          <div 
            className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-white/10 p-1.5 rounded-lg shadow-xl z-20"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIframeKey(k => k + 1);
              }}
              title="Reload preview"
              className="p-1.5 rounded-md hover:bg-white/10 text-white/85 hover:text-white transition-all cursor-pointer"
            >
              <RotateCw className="h-3.5 w-3.5" />
            </button>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              title="Open website in new tab"
              className="p-1.5 rounded-md hover:bg-white/10 text-white/85 hover:text-white transition-all cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <div className="w-[1px] h-4 bg-white/10 mx-0.5" />
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsInteractive(false);
              }}
              title="Exit interactive mode"
              className="p-1.5 rounded-md hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
