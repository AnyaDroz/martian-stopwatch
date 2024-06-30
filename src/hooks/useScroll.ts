import { DependencyList, RefObject, useEffect } from "react";

export const useScrollToBottom = (
  scrollContainerRef: RefObject<HTMLDivElement>,
  dependency: DependencyList,
) => {
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight;
    }
  }, [dependency]);
};
