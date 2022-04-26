import clsx from "clsx";
import React from "react";
import { createIcon } from "../helpers/icon";

export const VerifoneImage = createIcon(({ className, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="27"
            height="26"
            fill="none"
            viewBox="0 0 27 26"
            className={clsx("h-[26px] w-[27px]", className)}
            {...rest}
        >
            <rect width="23.04" height="23.04" x="1.869" y="1.48" fill="url(#pattern0)" rx="1.92" />
            <defs>
                <pattern id="pattern0" width="1" height="1" patternContentUnits="objectBoundingBox">
                    <use transform="scale(.00893)" xlinkHref="#image0_3990_29484" />
                </pattern>
                <image
                    id="image0_3990_29484"
                    width="112"
                    height="112"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
});