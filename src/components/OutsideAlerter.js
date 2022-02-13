import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, props) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (!document.querySelector(".sidebar").classList.contains("-translate-x-full")) {
                    document.querySelector(".sidebar").classList.toggle("-translate-x-full");
                    document.querySelector("#menu-button").classList.toggle("hidden");
                    document.querySelector("#close-button").classList.toggle("hidden");
                    if (props.isPhone())
                        document.querySelector(".open-button").classList.toggle("hidden");
                }
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props);

    return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideAlerter.propTypes = {
    children: PropTypes.element.isRequired
};

export default OutsideAlerter;