import * as PropTypes from "prop-types";

function Main({ children }) {
  return (
    <main className="min-h-[100dvh] px-5 pb-32 pt-28 md:px-16 lg:mx-auto lg:max-w-[1340px]">
      {children}
    </main>
  );
}

Main.propTypes = { children: PropTypes.element };

export default Main;
