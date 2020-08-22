import React from "react";
import Svg, { Path, ClipPath, Defs, G, Rect } from "react-native-svg";
import { SvgProps } from "../types";

export function HomeIcon({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.957 5.415L8.48.82a1 1 0 011.042 0l7.522 4.596A2 2 0 0118 7.122V16a2 2 0 01-2 2H2a2 2 0 01-2-2V7.122a2 2 0 01.957-1.707zM7 10a1 1 0 00-1 1v3a1 1 0 001 1h4a1 1 0 001-1v-3a1 1 0 00-1-1H7z"
        fill={color}
      />
    </Svg>
  );
}

export function Share({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.627 9.694V9.8l-.001.57-.002.645h.12c.228 0 .431-.15.51-.375.67-1.91 1.614-3.07 2.835-3.48.852-.286 1.79-.375 3.106-.413v2.955c0 .144.052.284.145.39a.524.524 0 00.768.03l4.718-4.61a.596.596 0 00-.004-.846L11.104.148A.528.528 0 0010.74 0c-.3 0-.544.257-.544.574v2.973c-2.073.097-3.806.31-4.965 1.54-1.63 1.73-1.61 3.888-1.603 4.607zm3.549-8.231c0-.423-.325-.765-.725-.765H2.9C1.3.698 0 2.068 0 3.758v9.182C0 14.63 1.298 16 2.9 16h8.698c1.6 0 2.899-1.37 2.899-3.06v-1.53c0-.423-.325-.766-.725-.766-.4 0-.725.343-.725.765v1.53c0 .846-.649 1.53-1.45 1.53H2.9c-.8 0-1.45-.684-1.45-1.53V3.76c0-.846.65-1.53 1.45-1.53h3.552c.4 0 .725-.343.725-.766z"
        fill={color}
      />
    </Svg>
  );
}

export function Food({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 1.42} viewBox="0 0 12 17" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.375 4.252L1 .5H.167v3.75A2.917 2.917 0 006 4.25V.5h-.833L4.79 4.252a.46.46 0 01-.916 0L3.5.5h-.833L2.29 4.252a.46.46 0 01-.916 0zm2.588 5.413a.88.88 0 00-1.76 0l-.3 5.42a1.182 1.182 0 102.361 0l-.301-5.42zm6.62.835c.47 0 .86.363.893.831l.268 3.755a1.164 1.164 0 11-2.322 0l.269-3.755a.895.895 0 01.892-.831zm1.25-1.667V.5A3.333 3.333 0 008.5 3.833v5h3.333z"
        fill={color}
      />
    </Svg>
  );
}

export function Lock({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 1.14} viewBox="0 0 14 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6a2 2 0 012 2v6a2 2 0 01-2 2H2a2 2 0 01-2-2V8a2 2 0 012-2V5a5 5 0 0110 0v1zM7 2a3 3 0 00-3 3v1h6V5a3 3 0 00-3-3z"
        fill={color}
      />
    </Svg>
  );
}

export function Fire({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 1.6} viewBox="0 0 10 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.667 3.833c-.278 2.778-1.111 4.264-2.5 4.459 0 0 1.25-4.875-.417-7.375 0 0-.177 2.678-1.963 5.893C.95 8.317 0 9.332 0 11.333c0 2.858 2.926 4.334 5.005 4.334 2.078 0 4.995-1 4.995-4.5 0-1.44-1.111-3.884-3.333-7.334z"
        fill={color}
      />
    </Svg>
  );
}

export function FastClock({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 0.6} viewBox="0 0 20 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 12a6 6 0 110-12 6 6 0 010 12zm-.025-9.667h.057c.17 0 .314.13.331.3l.304 3.034 2.165 1.237c.104.06.168.17.168.29v.14a.255.255 0 01-.322.245l-3.079-.84a.333.333 0 01-.245-.347l.289-3.75a.333.333 0 01.332-.309zm-8.308-1H2.333a1 1 0 000 2h3.334a1 1 0 100-2zm0 8H2.333a1 1 0 100 2h3.334a1 1 0 100-2zM1 5.333h2.667a1 1 0 010 2H1a1 1 0 110-2z"
        fill={color}
      />
    </Svg>
  );
}

export function Dollar({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zm-9.958-7.5a.792.792 0 00-.792.792v1.095l-.182.042a4.224 4.224 0 00-1.355.593c-.4.27-.724.615-.97 1.035-.247.42-.37.925-.37 1.515 0 .48.079.887.238 1.222.16.335.37.62.632.855s.56.428.893.578c.334.15.675.28 1.025.39.359.11.68.212.962.307.283.095.519.2.709.315.19.115.336.243.439.383.102.14.154.31.154.51 0 .21-.041.39-.123.54a.986.986 0 01-.332.36c-.138.09-.3.155-.485.195-.185.04-.375.06-.57.06-.431 0-.865-.108-1.301-.323a3.177 3.177 0 01-1.055-.802l-1.726 1.71c.483.49 1.089.867 1.818 1.132.52.19 1.053.31 1.6.365v1.34c0 .437.354.791.791.791h.038a.792.792 0 00.792-.792v-1.384a5.7 5.7 0 00.599-.132c.503-.14.95-.355 1.34-.645.39-.29.701-.658.932-1.103.231-.445.347-.972.347-1.582 0-.53-.108-.973-.324-1.328a3.06 3.06 0 00-.816-.892 4.358 4.358 0 00-1.094-.578c-.4-.145-.785-.277-1.155-.397-.257-.08-.488-.158-.693-.233a3.056 3.056 0 01-.532-.247 1.017 1.017 0 01-.339-.315.817.817 0 01-.115-.45c0-.21.049-.383.146-.518.098-.135.218-.245.362-.33.144-.085.306-.142.485-.172a2.554 2.554 0 011.587.202c.364.165.66.388.886.668l1.679-1.725a4.888 4.888 0 00-1.687-.975 5.923 5.923 0 00-1.608-.323v-.957a.792.792 0 00-.792-.792h-.038z"
        fill={color}
      />
    </Svg>
  );
}

export function Recommended({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 15.685l-2.939 1.422-1.337-2.978-3.165-.8.89-3.141L.54 7.541l2.7-1.834.238-3.256 3.248.331L9 .441l2.275 2.341 3.248-.331.238 3.256 2.7 1.834-1.91 2.647.89 3.141-3.165.8-1.337 2.978L9 15.685z"
        fill={color}
      />
    </Svg>
  );
}

export function Timer({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8a8 8 0 1016 0A8 8 0 000 8zm8.042-4.889h-.075a.444.444 0 00-.443.41l-.385 5.002a.444.444 0 00.326.463l4.106 1.12A.34.34 0 0012 9.777V9.59a.445.445 0 00-.224-.386L8.89 7.555l-.405-4.044a.444.444 0 00-.442-.4z"
        fill={color}
      />
    </Svg>
  );
}

export function Logout({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 15 15" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.999 3.75a.75.75 0 101.5 0V3a3 3 0 00-3-3h-4.5A3 3 0 000 3v9a3 3 0 003 3h4.504a3 3 0 003-3v-.75a.75.75 0 10-1.5 0V12a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 12V3A1.5 1.5 0 013 1.5h4.499a1.5 1.5 0 011.5 1.5v.75zm3.44 4.5l-.97.97a.75.75 0 101.06 1.06l2.251-2.25a.75.75 0 000-1.06l-2.25-2.25a.75.75 0 00-1.062 1.06l.97.97H5.246a.75.75 0 100 1.5h7.192z"
        fill={color}
      />
    </Svg>
  );
}

export function Marker({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 1.23} viewBox="0 0 13 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.167 6.75C.167 3 2.667.5 6.417.5s6.25 3.125 6.25 6.25c0 1.944-1.814 4.613-5.441 8.008a1.25 1.25 0 01-1.661.042C1.966 11.757.167 9.073.167 6.75zM6.417 8a2.083 2.083 0 100-4.167 2.083 2.083 0 000 4.167z"
        fill={color}
      />
    </Svg>
  );
}

export function MarkerArrow({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.769 5.423L14.327.903a.609.609 0 01.77.77l-4.52 13.558a.609.609 0 01-1.125.072l-2.846-5.91L.697 6.549A.609.609 0 01.77 5.423z"
        fill={color}
      />
    </Svg>
  );
}

export function Orderlist({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 1.125} viewBox="0 0 16 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.6C0 1.04 0 .76.109.546A1 1 0 01.546.109C.76 0 1.04 0 1.6 0h12.8c.56 0 .84 0 1.054.109a1 1 0 01.437.437C16 .76 16 1.04 16 1.6v14.8c0 .56 0 .84-.109 1.054a.997.997 0 01-.184.253L14 16l-1.5 1.5L11 16l-1.5 1.5L8 16l-1.5 1.5L5 16l-1.5 1.5L2 16 .293 17.707a.999.999 0 01-.184-.253C0 17.24 0 16.96 0 16.4V1.6zm2.054.673C2 2.38 2 2.52 2 2.8v.4c0 .28 0 .42.054.527a.5.5 0 00.219.219C2.38 4 2.52 4 2.8 4h10.4c.28 0 .42 0 .527-.054a.5.5 0 00.218-.219C14 3.62 14 3.48 14 3.2v-.4c0-.28 0-.42-.055-.527a.5.5 0 00-.218-.219C13.62 2 13.48 2 13.2 2H2.8c-.28 0-.42 0-.527.054a.5.5 0 00-.219.219z"
        fill={color}
      />
    </Svg>
  );
}

export function ProfileIcon({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 108 0 4 4 0 00-8 0zm3.983 6C4.262 10 .388 12.427.001 17.2c-.021.26.476.8.727.8h16.519c.75 0 .763-.605.75-.8-.292-4.907-4.226-7.2-9.014-7.2z"
        fill={color}
      />
    </Svg>
  );
}

export function Camera({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 0.7} viewBox="0 0 20 14" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 3.7c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C2.02.5 2.58.5 3.7.5h12.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874c.218.428.218.988.218 2.108v6.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874c-.428.218-.988.218-2.108.218H3.7c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C.5 11.98.5 11.42.5 10.3V3.7zm13 7.8a4 4 0 100-8 4 4 0 000 8zM5.5 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill={color}
      />
    </Svg>
  );
}

export function Doucument({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 1.29} viewBox="0 0 14 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.667 14h-10a.833.833 0 100 1.667h10v.833c0 .522-.299.833-.834.833h-10c-1.455 0-2.5-1.088-2.5-2.5V3.167c0-1.412 1.045-2.5 2.5-2.5h10c.535 0 .834.31.834.833V14z"
        fill={color}
      />
    </Svg>
  );
}

export function Facebook({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 1.75} viewBox="0 0 8 14" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.155 14V7h2.07L7.5 4.586H5.155l.003-1.208c0-.63.064-.966 1.033-.966h1.294V0h-2.07C2.925 0 2.05 1.17 2.05 3.138v1.449H.5v2.412h1.55V14h3.105z"
        fill={color}
      />
    </Svg>
  );
}

export function Cart({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 1.06} viewBox="0 0 16 17" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.918 6.5L8 2.802 11.082 6.5H4.918zM3 6.5a.83.83 0 01.193-.533l4.167-5c.333-.4.947-.4 1.28 0l4.167 5A.83.83 0 0113 6.5h2.083a.833.833 0 01.77 1.154l-3.045 7.307A2.5 2.5 0 0110.5 16.5h-5a2.5 2.5 0 01-2.308-1.539L.147 7.654A.833.833 0 01.917 6.5H3zm5 6.667a1.667 1.667 0 100-3.334 1.667 1.667 0 000 3.334z"
        fill={color}
      />
    </Svg>
  );
}

export function CloseEye({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 0.857} viewBox="0 0 14 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.901.75L1.825 10.826l1.06 1.06L12.963 1.812 11.902.75zM8.88 1.871L7 3.75A2.25 2.25 0 004.75 6L2.145 8.605C.813 7.375.25 6 .25 6S2.09 1.5 7 1.5c.65 0 1.28.14 1.879.371zm3.527 2.515A13.99 13.99 0 0113.75 6S10.682 10.5 7 10.5c-.233 0-.46-.01-.678-.03l6.084-6.084z"
        fill={color}
      />
    </Svg>
  );
}

export function Eye({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 10" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 .5C2.09.5.25 5 .25 5S2.09 9.5 7 9.5c3.682 0 6.75-4.5 6.75-4.5S10.682.5 7 .5zM4.75 5a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z"
        fill={color}
      />
    </Svg>
  );
}

export function Google({ size }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 512 512">
      <Path
        d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
        fill="#fbbb00"
      />
      <Path
        d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
        fill="#518ef8"
      />
      <Path
        d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
        fill="#28b446"
      />
      <Path
        d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
        fill="#f14336"
      />
    </Svg>
  );
}

export function Notification({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 0.888} viewBox="0 0 18 16" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.157 10.061c0 1.366-1.122 2.472-2.505 2.472h16.696c-1.383 0-2.504-1.106-2.504-2.472v-4.12C14.844 2.757 12.227.175 9 .175c-3.227 0-5.843 2.582-5.843 5.768v4.12zM9 15.826c.86 0 1.655-.626 2.087-1.642H6.913C7.345 15.201 8.14 15.826 9 15.826z"
        fill={color}
      />
    </Svg>
  );
}

export function CreditCard({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 0.667} viewBox="0 0 18 12" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.667 1.833c0-.92.746-1.666 1.666-1.666h13.334c.92 0 1.666.746 1.666 1.666v.834H.667v-.834zm0 3.333h16.666v5c0 .921-.746 1.667-1.666 1.667H2.333c-.92 0-1.666-.746-1.666-1.667v-5zm12.5 2.5a.833.833 0 000 1.667h1.666a.833.833 0 100-1.667h-1.666z"
        fill={color}
      />
    </Svg>
  );
}
