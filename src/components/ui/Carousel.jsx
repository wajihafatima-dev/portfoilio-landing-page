"use client";

import React, { useState, useEffect, useCallback, useContext, createContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IconButton, Box } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const CarouselContext = createContext(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used inside <Carousel />");
  return context;
}

function Carousel({ orientation = "horizontal", opts, plugins, setApi, children, ...props }) {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, plugins);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => api?.off("select", onSelect);
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider value={{
      carouselRef,
      api,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
      orientation
    }}>
      <Box
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        sx={{ position: "relative", outline: "none" }}
        {...props}
      >
        {children}
      </Box>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ children, sx, ...props }) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <Box ref={carouselRef} sx={{ overflow: "hidden" }} {...props}>
      <Box
        sx={{
          display: "flex",
          flexDirection: orientation === "horizontal" ? "row" : "column",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

function CarouselItem({ children, sx, ...props }) {
  const { orientation } = useCarousel();
  return (
    <Box
      role="group"
      aria-roledescription="slide"
      sx={{
        flex: "0 0 100%",
        pl: orientation === "horizontal" ? 2 : 0,
        pt: orientation === "vertical" ? 2 : 0,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

function CarouselPrevious(props) {
  const { scrollPrev, canScrollPrev, orientation } = useCarousel();

  return (
    <IconButton
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      sx={{
        position: "absolute",
        top: orientation === "horizontal" ? "50%" : "-40px",
        left: orientation === "horizontal" ? -40 : "50%",
        transform: orientation === "horizontal" ? "translateY(-50%)" : "translateX(-50%) rotate(90deg)",
        bgcolor: "background.paper",
      }}
      {...props}
    >
      <ArrowLeft />
    </IconButton>
  );
}

function CarouselNext(props) {
  const { scrollNext, canScrollNext, orientation } = useCarousel();

  return (
    <IconButton
      onClick={scrollNext}
      disabled={!canScrollNext}
      sx={{
        position: "absolute",
        top: orientation === "horizontal" ? "50%" : "calc(100% + 16px)",
        right: orientation === "horizontal" ? -40 : "50%",
        transform: orientation === "horizontal" ? "translateY(-50%)" : "translateX(-50%) rotate(90deg)",
        bgcolor: "background.paper",
      }}
      {...props}
    >
      <ArrowRight />
    </IconButton>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel
};
