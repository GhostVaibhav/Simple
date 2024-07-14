import React from "react";

function Loader(props) {
    const colors = {
        light: {
            bgColor: "bg-white",
        },
        sw: {
            bgColor: "bg-gray-900",
        },
        dark: {
            bgColor: "bg-gray-900",
        }
    };
    return (
        <div className={`overflow-hidden ${colors[props.theme].bgColor} w-screen h-screen flex justify-center`}>
            <div className="flex items-center">
                <div className="loadingio-spinner-rolling-cyx4pdgtrgj"><div className="ldio-mffgx1tmlt8">
                    <div></div>
                </div></div>
            </div>
        </div>
    );
}

export default Loader;
