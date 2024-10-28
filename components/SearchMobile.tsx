import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";

interface Props {
  showSearchBar: boolean;
  setShowSearchBar: (show: boolean) => void;
}

const SearchMobile: React.FC<Props> = ({ setShowSearchBar, showSearchBar }) => {
  return (
    <AnimatePresence>
      {showSearchBar && (
        <motion.div
          className="bg-white absolute top-0 left-0 w-full h-full flex justify-between items-center gap-3"
          initial={{ x: -100, opacity: 0}}
          animate={{ x: 0, opacity: 1}}
          exit={{ x: -100, opacity: 0}}
          transition={{duration: 0.5}}
        >
          <button onClick={() => setShowSearchBar(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-triangle"
              style={{ transform: "rotate(-90deg)" }}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" />
            </svg>
          </button>
          <div className="flex-1">
            <SearchBar/>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchMobile;
