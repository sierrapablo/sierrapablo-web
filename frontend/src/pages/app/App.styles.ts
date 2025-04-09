export const appStyles = {
  layout: "h-screen w-screen flex items-center justify-center max-w-full px-5",
  grid: "grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(3,1fr)] gap-[10px] pb-20 md:pb-0",
  card: "sm:px-1 w-full flex items-center justify-center",
  label: "text-base sm:text-lg md:text-xl font-bold text-center",
  overlay: "fixed inset-0 w-full h-full z-50 bg-sp-darkgrey bg-opacity-80 backdrop-blur-md flex items-center justify-center transition-opacity duration-300",
  modal: "w-[90vh] h-[60vh] bg-stone-300 text-black p-10 rounded-xl shadow-2xl transform transition-all duration-500",
  closeButton: "absolute top-4 right-4 text-neutral-500 hover:text-red-500 focus:outline-none ease-in-out transition duration-500",
};

