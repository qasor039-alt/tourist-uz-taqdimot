import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES_DATA } from './data/slidesData';
import { ViewMode } from './types';
import { Navbar } from './components/Navbar';
import { SlideViewer } from './components/SlideViewer';
import { PresenterMode } from './components/PresenterMode';
import { SlideGrid } from './components/SlideGrid';
import { DocumentView } from './components/DocumentView';
import { InteractivePrototype } from './components/InteractivePrototype';
import { RoiCalculator } from './components/RoiCalculator';
import { ExportModal } from './components/ExportModal';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<ViewMode>('slides');
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const totalSlides = SLIDES_DATA.length;

  const handleNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1));
  }, [totalSlides]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input/select/textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'Space') {
        if (viewMode === 'slides' || viewMode === 'presenter') {
          e.preventDefault();
          handleNextSlide();
        }
      } else if (e.key === 'ArrowLeft') {
        if (viewMode === 'slides' || viewMode === 'presenter') {
          e.preventDefault();
          handlePrevSlide();
        }
      } else if (e.key === 'Home') {
        setCurrentSlideIndex(0);
      } else if (e.key === 'End') {
        setCurrentSlideIndex(totalSlides - 1);
      } else if (e.key.toLowerCase() === 'f') {
        handleToggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide, totalSlides, viewMode]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 flex flex-col relative overflow-x-hidden selection:bg-blue-500 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Immersive Ambient Glows */}
      <div className="fixed inset-0 bg-radial-ambient pointer-events-none z-0" />
      <div className="fixed inset-0 bg-isometric-grid opacity-10 pointer-events-none z-0" />

      {/* Top Navbar */}
      <Navbar
        currentSlide={currentSlideIndex}
        totalSlides={totalSlides}
        viewMode={viewMode}
        onSelectViewMode={(mode) => setViewMode(mode)}
        onPrevSlide={handlePrevSlide}
        onNextSlide={handleNextSlide}
        onOpenExport={() => setIsExportOpen(true)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center relative z-10">
        {viewMode === 'slides' && (
          <SlideViewer
            slide={SLIDES_DATA[currentSlideIndex]}
            slideIndex={currentSlideIndex}
            totalSlides={totalSlides}
            onNextSlide={handleNextSlide}
            onPrevSlide={handlePrevSlide}
            onSwitchToPrototype={() => setViewMode('prototype')}
            onSwitchToCalculator={() => setViewMode('calculator')}
          />
        )}

        {viewMode === 'presenter' && (
          <PresenterMode
            slides={SLIDES_DATA}
            currentSlideIndex={currentSlideIndex}
            onSelectSlide={(idx) => setCurrentSlideIndex(idx)}
            onClosePresenter={() => setViewMode('slides')}
          />
        )}

        {viewMode === 'prototype' && <InteractivePrototype />}

        {viewMode === 'calculator' && <RoiCalculator />}

        {viewMode === 'overview' && (
          <SlideGrid
            slides={SLIDES_DATA}
            currentSlideIndex={currentSlideIndex}
            onSelectSlide={(idx) => {
              setCurrentSlideIndex(idx);
              setViewMode('slides');
            }}
          />
        )}

        {viewMode === 'doc' && <DocumentView onPrint={handlePrint} />}
      </main>

      {/* Export & Download Modal */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        onPrint={handlePrint}
      />
    </div>
  );
}
