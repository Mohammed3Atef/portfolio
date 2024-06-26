import React from "react";

import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

export default function ProjectsTest() {
  return (
    <div id="projects" className="grid  gap-[3rem] lg:gap-20 mb-32">
      <div
        className="flex flex-col justify-center items-center mb-4 space-y-1"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h2 className="from-blue-500 to-blue-700 bg-clip-text bg-gradient-to-r text-transparent font-semibold lg:text-lg">
          some of my work
        </h2>
        <h1 className="text-xl xl:text-2xl font-bold text-white">Projects</h1>
      </div>
      <article
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" flex flex-col-reverse items-center gap-8 border-b-2 border-b-[#00ffd1] pb-8
        md:hover:border-b-[#00ffd1] md:hover:border-b-2
        md:grid md:grid-cols-[1fr_1fr] md:gap-10  md:duration-[0.5s]
        md:px-0 md:py-8 md:border-y-transparent md:hover:border-t-2 hover:border-t-[#00ffd1] "
      >
        <div className="imgView relative h-min bg-[#9ca3af1c] p-2">
          <img
            src="/https://previews.dropbox.com/p/thumb/ACVQZYtgob24OKt7z-uxu85wdke2s2pNoLyNOcEOYEpXJxLnbIeij8k_FR6jA_IBYZgd0vpy2oA1E0lA6IbWbeeCVyR6eoC_je0p3IQlhK2nZafSuh68od9ji0IL2yreZdtbpALo4DPYmO0wSb6a4neo8noywcQmZ77KtcGi9yr1IHd4RwgsMBpckxkJwELkBJl5sn1tNqzSEzPi4yz1zx-IqMCaQCcuMXJcqQF9kVGOJzB6qEV8R-KGUGWciD249oBnl3BEpSJlHKiQckHNNyMSGtqq0vAln01cLUJ-8-gqHK7T7KjImYiVhvmyH58nk5m5RA52PxTHYZt2gqnYdB1d/p.png"
            alt="pr"
            className="h-3/5 absolute bottom-[-1rem] right-[-1rem] rounded-[10px]"
          />
          <img
            src="https://previews.dropbox.com/p/thumb/ACWUoUCHHus9KEDDMgToYgpyL4fCVTlV4OXRrTsIxVlqrwkvHCVES0JhXbOaaXVnTfj7LDkbI60tSJAJD2Hv4rr-AlDMXV0cH5nCGU68rP4-4eowE5IQGm7cGZwT9cQUz8ZpmhzDKIr_dAVF3ZXEF_xieZ0Qk3MhJczQwJCKhJNB1z6iAoPByRMxVhr87IwlzSZbzj6JuN20a2PWu6KFtdwbQ6eRs9Ej28J5IuofCYL7Q-P1beYfmEI4jtQsaZRzUxd_f-KdELQWyNl4ddCddaQ0xQknvZxp7fpGKN0Wn3_arPBS8VujCx5fV94m1j_FoOcTuyFlWN_j1fF3vsdYPA0p/p.png"
            alt="pr"
            className=" flex flex-1 w-full transition-transform duration-[1s] ease-[ease,border-color] delay-[0.7s] rounded-[10px]"
          />
        </div>
        <div className="projectInfo flex flex-col items-center justify-between gap-6">
          <div className="projectTitle text-[#00ffd1] text-[1.6rem] text-center tracking-[1px] rounded-md">
            Dashboard
          </div>
          <div className="description text-base text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            vitae iusto ea voluptates magnam earum ratione eum maxime enim. Nam,
            iusto cupiditate maiores suscipit aliquam aspernatur necessitatibus
            eius praesentium dolor?
          </div>
          <div className="languagesView flex flex-1 flex-wrap justify-evenly gap-4">
            <TiHtml5 className="text-5xl text-[#00ffff] transition-[0.3s] hover:scale-110" />

            <RiTailwindCssFill className="text-5xl text-[#00ffff] transition-[0.3s] hover:scale-110" />
          </div>
          <div className="buttonsView flex flex-1 flex-wrap justify-evenly gap-4">
            <a
              href="https://github.com/Mohammed3Atef/Dashboard"
              target="_blank"
              rel="noreferrer"
              className="code flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer  duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1]  hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                className="projectIcon text-[#00ffd1]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"></path>
              </svg>
              <div>Code</div>
            </a>
            <a
              href="https://mohammed3atef.github.io/Dashboard/"
              target="_blank"
              rel="noreferrer"
              className="website  flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1] hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="projectIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"></path>
                <path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"></path>
              </svg>
              <div>See website</div>
            </a>
          </div>
        </div>
      </article>
      <article
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-col items-center gap-8 border-b-2 border-b-[#00ffd1] pb-8
        md:hover:border-b-[#00ffd1] md:hover:border-b-2
        md:grid md:grid-cols-[1fr_1fr] md:gap-10  md:duration-[0.5s]
        md:px-0 md:py-8 md:border-y-transparent md:hover:border-t-2 hover:border-t-[#00ffd1]"
      >
        <div className="projectInfo flex flex-col items-center justify-between gap-6">
          <div className="projectTitle text-[#00ffd1] text-[1.6rem] text-center tracking-[1px] rounded-md">
            My Library
          </div>
          <div className="description text-base text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, sequi dolorum? Pariatur porro, earum rem, vero,
            veniam harum obcaecati est aperiam accusamus omnis odit
            voluptatibus. Iure, quis vero. Molestiae, quibusdam.
          </div>
          <div className="languagesView flex flex-1 flex-wrap justify-evenly gap-4">
            <RiTailwindCssFill className="text-5xl text-[#00ffff] transition-[0.3s] hover:scale-110" />
            <SiJavascript className="text-5xl text-[#ffff00] transition-[0.3s] hover:scale-110" />
          </div>
          <div className="buttonsView flex flex-1 flex-wrap justify-evenly gap-4">
            <a
              href="https://github.com/Mohammed3Atef/Library"
              target="_blank"
              rel="noreferrer"
              className="code flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer  duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1]  hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                className="projectIcon text-[#00ffd1]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"></path>
              </svg>
              <div>Code</div>
            </a>
            <a
              href="https://mohammed3atef.github.io/Library/"
              target="_blank"
              rel="noreferrer"
              className="website  flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1] hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="projectIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"></path>
                <path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"></path>
              </svg>
              <div>See website</div>
            </a>
          </div>
        </div>
        <div className="imgView relative h-min ">
          <img
            src="https://previews.dropbox.com/p/thumb/ACX1_IyhTyy0cR19OACL2eUXxyz6pBdjPxHTSLIJu0T_28fQ6l6AIdwSu43hLzIz2Z0fHREHK3WWe5Rj1iqsFJYgpixU8q4TZYZMZQsGF8Kuc1fQPFF9QqcOWlZIXKn3FFcvgNI51MIfZMS95ZiHjxNi83tHR-g_ON_d1b7eFgeVAngn1q2kFj6jGGDjY18caOJk9HydD2AkIxPdCph5sx8hQQ-VFj3cxLr1QGB7NjMawRts6s6_GGR5YtPxyPqFY4GenhiB36HNQj2bPwuV4ygsvY27QzTi33ixVLJNgWZ1nf9szO5bYIWyL0n1BP7aF2votMvTFhLnrZxvV2Gm37pk/p.png"
            alt="pr"
            className="h-3/5 absolute bottom-[-1rem] right-[-1rem] rounded-[10px]"
          />
          <img
            src="https://previews.dropbox.com/p/thumb/ACVbY6TpzPjWLjpIoKGniX9MiGV6raAnvvLcDKPmydXywDJkcphDjL2OjW4pZalFofX9Ejgfnz25n49W-fiQiBp4f520y0eIQo2jqqVjOAh-NCvaHhuinlHbLFCu_qd1e7VnLzC7DBzAARg_uO883-1TO-wHrSXg8Xs6_lU_86qJyF0-rRBn_4O6t-Q75VJHDKLEuRBcweX0uJS7nc-YzEiGVNCElBtOIP_HPmawyQkt16kc1wRSYkSWI_9HxZFnlCSppbZZW2oXs4R1wpC1uAppRcv79Aj9b2PSajYPL3bkEjYDnX7zuPCPV7t1yqNDr-b7c28nsF1vVs3B1eK5XIXj/p.png"
            alt="pr"
            className=" flex flex-1 w-full transition-transform duration-[1s] ease-[ease,border-color] delay-[0.7s] rounded-[10px]"
          />
        </div>
      </article>
      <article
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col-reverse items-center gap-8 border-b-2 border-b-[#00ffd1] pb-8
        md:hover:border-b-[#00ffd1] md:hover:border-b-2
        md:grid md:grid-cols-[1fr_1fr] md:gap-10  md:duration-[0.5s]
        md:px-0 md:py-8 md:border-y-transparent md:hover:border-t-2 hover:border-t-[#00ffd1]"
      >
        <div className="imgView relative h-min ">
          <img
            src="https://previews.dropbox.com/p/thumb/ACUJiGqeD1nziULt_A-TAljYYb2tAbVuGEN8xBFrFmTH9OobAZSai3SnGWTC0K9NDo9Sz7IJAk6a4RnWSXset6_a4RJ4gtaxZNTLr5mNxzkkLmJcT4EB4hsq0stVyH-PpEY0lHsde_BvaByYr7ks5kwY_UxL_C4OW-xlatbhRRL6xe8J4YbDJCOBdq7b7MbXM9BmG_pVN_uC2JjPqxl_lJPy3qSS4VU0YqwFx9kqMR_vecG1yixN1EAQqtNJO1OefK7xTmxzUoGVt8mHQ0e9L_wnqf481E6RUu1iv01YGKZmm-bzW3M1SirLrxuQr0v8bOf9-9vLJTKj5sMLkY7AIvb5/p.png"
            alt="pr"
            className="h-3/5 absolute bottom-[-1rem] right-[-1rem] rounded-[10px]"
          />
          <img
            src="https://previews.dropbox.com/p/thumb/ACXeLsocYaR7ZtDEJ6xrON9KkRo_RI0qOjOYr-tLvoKeBFUkkUBRExqMa9cx_e3FYeFoeTM7TVf2KLjOjUWFQVVvweKPZpYt29h5r_6n35GnO1refWZ_3EzlDqs2G6x7wjEjkUhAQhdPLSRNIB45XwhBPpjtBeLzEnZZL-g9xEvzS5nFPOc7IXPxIEtukEITZZz743Xo8C5juzVx_hu1swVt1G6ZliOJ8K51lz0tQmJB5fMR-pVkI2ghLQn2YlHJ3TzrcdqQ0wSX5CjmuRGQVK7vf_tFvMShE0DU3wMVfrQeMuD2YusuzIDs8Q5YVAdcl7YD9ITc0GOXLs4JiOxbI_PH/p.png"
            alt="pr"
            className=" flex flex-1 w-full transition-transform duration-[1s] ease-[ease,border-color] delay-[0.7s] rounded-[10px]"
          />
        </div>
        <div className="projectInfo flex flex-col items-center justify-between gap-6">
          <div className="projectTitle text-[#00ffd1] text-[1.6rem] text-center tracking-[1px] rounded-md">
            Fashionesta
          </div>
          <div className="description text-base text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            vitae iusto ea voluptates magnam earum ratione eum maxime enim. Nam,
            iusto cupiditate maiores suscipit aliquam aspernatur necessitatibus
            eius praesentium dolor?
          </div>
          <div className="languagesView flex flex-1 flex-wrap justify-evenly gap-4">
            <FaReact className="text-5xl text-[#00ffff] transition-[0.3s] hover:scale-110" />

            <RiTailwindCssFill className="text-5xl text-[#00ffff] transition-[0.3s] hover:scale-110" />
          </div>
          <div className="buttonsView flex flex-1 flex-wrap justify-evenly gap-4">
            <a
              href="https://github.com/Mohammed3Atef/Fashionesta"
              target="_blank"
              rel="noreferrer"
              className="code flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer  duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1]  hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 32 32"
                className="projectIcon text-[#00ffd1]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 5 6 L 5 19.5625 L 2.71875 21.876953 C 2.26575 22.328953 2 22.95275 2 23.59375 C 2 24.91375 3.08625 26 4.40625 26 L 27.59375 26 C 28.91375 26 30 24.91375 30 23.59375 C 30 22.95275 29.73425 22.328 29.28125 21.875 L 27 19.5625 L 27 6 L 5 6 z M 7 8 L 25 8 L 25 19 L 7 19 L 7 8 z M 16 9 L 14.5 18 L 16 18 L 17.5 9 L 16 9 z M 12.085938 11 L 10.367188 13.068359 L 10 13.5 L 10.367188 13.931641 L 12.085938 16 L 13.171875 15.136719 L 11.810547 13.5 L 13.171875 11.863281 L 12.085938 11 z M 19.914062 11 L 18.828125 11.863281 L 20.189453 13.5 L 18.828125 15.136719 L 19.914062 16 L 21.632812 13.931641 L 22 13.5 L 21.632812 13.068359 L 19.914062 11 z M 6.4375 21 L 25.5625 21 L 27.875 23.28125 C 27.953 23.35925 28 23.48375 28 23.59375 C 28 23.83575 27.83575 24 27.59375 24 L 4.40625 24 C 4.16425 24 4 23.83575 4 23.59375 C 4 23.48475 4.047 23.36025 4.125 23.28125 L 6.4375 21 z"></path>
              </svg>
              <div>Code</div>
            </a>
            <a
              href="https://fashionesta.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="website  flex gap-2 items-center bg-transparent text-white border text-[1.1rem] cursor-pointer duration-[0.3s] ease-[ease,border-color] px-[0.6rem] py-1 rounded-[5px] border-solid border-[#00ffd1] hover:bg-[#00e1ff2f] hover:border-[#00e0ff]"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="projectIcon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M280 341.1l-1.2.1c-3.6.4-7 2-9.6 4.5l-64.6 64.6c-13.7 13.7-32 21.2-51.5 21.2s-37.8-7.5-51.5-21.2c-13.7-13.7-21.2-32-21.2-51.5s7.5-37.8 21.2-51.5l68.6-68.6c3.5-3.5 7.3-6.6 11.4-9.3 4.6-3 9.6-5.6 14.8-7.5 4.8-1.8 9.9-3 15-3.7 3.4-.5 6.9-.7 10.2-.7 1.4 0 2.8.1 4.6.2 17.7 1.1 34.4 8.6 46.8 21 7.7 7.7 13.6 17.1 17.1 27.3 2.8 8 11.2 12.5 19.3 10.1.1 0 .2-.1.3-.1.1 0 .2 0 .2-.1 8.1-2.5 12.8-11 10.5-19.1-4.4-15.6-12.2-28.7-24.6-41-15.6-15.6-35.9-25.8-57.6-29.3-1.9-.3-3.8-.6-5.7-.8-3.7-.4-7.4-.6-11.1-.6-2.6 0-5.2.1-7.7.3-5.4.4-10.8 1.2-16.2 2.5-1.1.2-2.1.5-3.2.8-6.7 1.8-13.3 4.2-19.5 7.3-10.3 5.1-19.6 11.7-27.7 19.9l-68.6 68.6C58.9 304.4 48 330.8 48 359c0 28.2 10.9 54.6 30.7 74.4C98.5 453.1 124.9 464 153 464c28.2 0 54.6-10.9 74.4-30.7l65.3-65.3c10.4-10.5 2-28.3-12.7-26.9z"></path>
                <path d="M433.3 78.7C413.5 58.9 387.1 48 359 48s-54.6 10.9-74.4 30.7l-63.7 63.7c-9.7 9.7-3.6 26.3 10.1 27.4 4.7.4 9.3-1.3 12.7-4.6l63.8-63.6c13.7-13.7 32-21.2 51.5-21.2s37.8 7.5 51.5 21.2c13.7 13.7 21.2 32 21.2 51.5s-7.5 37.8-21.2 51.5l-68.6 68.6c-3.5 3.5-7.3 6.6-11.4 9.3-4.6 3-9.6 5.6-14.8 7.5-4.8 1.8-9.9 3-15 3.7-3.4.5-6.9.7-10.2.7-1.4 0-2.9-.1-4.6-.2-17.7-1.1-34.4-8.6-46.8-21-7.3-7.3-12.8-16-16.4-25.5-2.9-7.7-11.1-11.9-19.1-9.8-8.9 2.3-14.1 11.7-11.3 20.5 4.5 14 12.1 25.9 23.7 37.5l.2.2c16.9 16.9 39.4 27.6 63.3 30.1 3.7.4 7.4.6 11.1.6 2.6 0 5.2-.1 7.8-.3 6.5-.5 13-1.6 19.3-3.2 6.7-1.8 13.3-4.2 19.5-7.3 10.3-5.1 19.6-11.7 27.7-19.9l68.6-68.6c19.8-19.8 30.7-46.2 30.7-74.4s-11.1-54.6-30.9-74.4z"></path>
              </svg>
              <div>See website</div>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
