"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../../context/Themescontext";
import LoadingBar from "../../components/loader";
import Button1 from "../../components/ui/buttons/button1";

export default function ProjectsPage({ params }) {
  const [project, setProject] = useState(null);
  const { isThemeOn } = useTheme();
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch("/projects.json");
      const projects = await response.json();
      const foundProject = projects.find(
        (b) => b.id === parseInt(params.id, 10)
      );
      setProject(foundProject);
      const timer = setTimeout(() => {
        setShowSecondDiv(true);
      }, 100);
      return () => clearTimeout(timer);
    };
    fetchProject();
  }, [params.id]);
  const content = project
    ? [
      { title: project.whyuse1, description: project.desc1 },
      { title: project.whyuse2, description: project.desc2 },
      { title: project.whyuse3, description: project.desc3 },
      { title: project.whyuse4, description: project.desc4 },
      { title: project.whyuse5, description: project.desc5 },
      { title: project.whyuse6, description: project.desc6 },
    ]
    : [];
  if (!project) {
    return (
      <div className="flex items-center justify-center h-screen">
        {showSecondDiv && (
          <div className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
            Project not found
            <div className="my-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="120px"
                viewBox="0 -960 960 960"
                width="120px"
                className={`justify-center m-auto ${isThemeOn ? "fill-black" : "fill-white"
                  }`}
              >
                <path d="M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 100q-68 0-123.5 38.5T276-280h66q22-37 58.5-58.5T480-360q43 0 79.5 21.5T618-280h66q-25-63-80.5-101.5T480-420Zm0 340q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
              </svg>
              <div className="flex m-auto justify-center">
                <Button1
                  text="Something wrong? Go to Projects page"
                  href="/projects"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 -960 960 960"
                      width="48"
                      className={` ${isThemeOn
                          ? "fill-black group-hover:fill-white"
                          : "fill-white group-hover:fill-black"
                        }`}
                    >
                      <path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        )}
        <div className="absolute bottom-0">
          <LoadingBar />
          {showSecondDiv && <div>Still trying to fetch...</div>}
        </div>
      </div>
    );
  }

  return (
    <div className=" flex flex-wrap items-center px-5 md:px-20 lg:px-28 justify-center">
      <div className="w-full px-4 lg:w-7/12 flex  items-center justify-center">
        <div
          className="animate-fadeInDown mb-12 lg:mb-0 lg:max-w-[570px]"
          data--delay=".3s"
        >
          <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-[40px] md:text-[50px] lg:text-[42px] xl:text-[50px]">
            {project.title}
          </h1>
          <span className="animate-fadeInDown mb-12 lg:max-w-[570px] text-2xl">
            {project.marketingline}
          </span>
          <div className="flex flex-col md:flex-row justify-between px-2 md:px-5 items-stretch md:items-baseline mb-7 gap-4">
            <Button1
              text="Live Link"
              href={`${project.livelink}`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
              }
            />
            <Button1
              text="Github Repo"
              href={`${project.github}`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              }
            />
            {project.download && (
              <Button1
                text={`Direct Download this ${project.filetype}`}
                href={`${project.download}`}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M280-280h400v-80H280v80Zm200-120 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160Zm0 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                }
              />
            )}
          </div>
          <p className="my-10 max-w-[475px] text-base leading-relaxed text-body">
            {project.largedescription}
          </p>
        </div>
      </div>
      <div className="w-full px-4 lg:w-5/12">
        <div
          className=" animate-fadeInUp relative mx-auto w-full max-w-[530px] lg:mr-0"
          data--delay=".3s"
        >
          <Image
            src={project.image}
            height={600}
            width={900}
            alt={project.title}
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="container mt-4 md:mt-6">
        <div className=" fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[44px] md:leading-tight">
            {project.heading2}
          </h2>
          <p className="text-base text-body">{project.description2}</p>
        </div>
      </div>
      <div className="rounded-2xl border-2 border-foreground px-5 pb-14 pt-14 md:pb-1 lg:pb-5 lg:pt-20 xl:px-10">
        <div className="flex flex-wrap">
          {content.map((item, index) => (
            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="animate-fadeInUp mx-auto mb-[60px] max-w-[310px] text-center">
                <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl duration-300 border-2 border-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#e8eaed"
                    className={` ${isThemeOn ? "fill-black " : "fill-white "}`}
                  >
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold sm:text-[22px] xl:text-[26px]">
                  {item.title}
                </h3>
                <p className="text-base text-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto my-4 lg:my-12 items-center">
        {project.techStack.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-6  p-4 backdrop-blur-sm rounded-[32px] shadow-[35px_0_0_rgba(145,192,255,0),inset_-7px_-7px_16px_0px_rgba(145,192,255,0.6),inset_0px_11px_28px_0px_rgb(255,255,255)]"
          >
            {category == "Javascript" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="120"
                    viewBox="0 -960 960 960"
                    width="120"
                    className={`${isThemeOn ? "fill-black" : "fill-white"}`}
                  >
                    <path d="M300-360q-25 0-42.5-17.5T240-420v-40h60v40h60v-180h60v180q0 25-17.5 42.5T360-360h-60Zm220 0q-17 0-28.5-11.5T480-400v-40h60v20h80v-40H520q-17 0-28.5-11.5T480-500v-60q0-17 11.5-28.5T520-600h120q17 0 28.5 11.5T680-560v40h-60v-20h-80v40h100q17 0 28.5 11.5T680-460v60q0 17-11.5 28.5T640-360H520Z" />
                  </svg>
                </div>
              </div>
            )}

            {category == "React" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/icons8-react-a-javascript-library-for-building-user-interfaces-96.png"
                    width={100}
                    height={100}
                    alt="React logo"
                  />
                </div>
              </div>
            )}
            {category == "Redis" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <svg
                    width="85"
                    height="27"
                    viewBox="0 0 85 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1878_297)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M75.2909 13.8125C75.2909 10.8448 77.4892 9.12284 80.2371 9.12284C82.2888 9.12284 84.1207 10.1121 85 12.5668C84.7435 13.8125 83.2047 15.2047 82.5453 15.4246C81.9957 14.2522 81.3728 13.556 80.7866 13.556C80.0539 13.556 80.0172 14.069 80.0172 14.7284C80.0172 15.1955 80.151 15.8834 80.3119 16.7112C80.5549 17.9615 80.8599 19.5309 80.8599 21.1401C80.8599 24.0711 78.8082 26.2328 75.6573 26.2328C72.7721 26.2328 71.1778 24.3414 70.4665 21.3198C68.5818 24.6972 65.8257 26.2328 63.7134 26.2328C60.411 26.2328 59.6338 23.7919 59.7121 21.3161C58.3852 23.6612 55.831 26.2328 53.3815 26.2328C50.8809 26.2328 49.9976 24.0563 50.2002 21.5215C48.702 24.3122 45.9919 26.2328 43.3793 26.2328C40.5442 26.2328 39.141 23.9806 39.5951 21.189C37.6878 23.5333 34.1374 26.2328 30.4461 26.2328C26.2373 26.2328 24.4053 23.9632 24.1882 21.1193C22.1568 24.375 19.4187 26.3427 16.1573 26.3427C11.4493 26.3427 9.76537 22.1561 9.52032 18.7315C7.77547 21.0681 5.81377 23.4923 3.40733 26.1961C3.15086 26.4526 2.93103 26.5991 2.67457 26.5991C1.8319 26.5991 0.109914 22.8621 0 21.4698C0.723099 20.3478 5.28119 15.3398 8.95093 11.3079C10.2409 9.89066 11.4211 8.594 12.2863 7.6291C10.0389 8.30726 7.72169 9.65975 4.79957 11.7608C4.28664 12.1272 2.85776 8.7931 2.8944 6.22845C6.26509 3.73707 11.3944 2.16164 15.5345 2.16164C21.3233 2.16164 24.6573 5.38578 24.6573 9.8556C24.6573 13.5927 21.5431 17.6961 17 17.8427C14.6377 17.904 13.1237 16.578 12.3494 14.9405C12.4419 17.473 13.7587 20.5905 17.2931 20.5905C21.1462 20.5905 22.9965 18.2646 25.7559 14.7958C25.9352 14.5704 26.1183 14.3403 26.306 14.1056C28.6509 11.2112 31.3621 8.64655 35.319 8.64655C37.7371 8.64655 39.3858 10.1487 39.3858 12.4203C39.3858 15.1681 36.1616 18.9784 31.6552 18.9784C30.8855 18.9784 30.1839 18.877 29.5917 18.6766C29.5768 18.7921 29.5668 18.9058 29.5668 19.0151C29.5668 20.2974 30.0431 21.0668 32.1315 21.0668C35.2091 21.0668 38.1034 19.2349 41.6207 14.9483C45.0647 10.7349 47.6659 8.90302 50.4138 8.90302C52.2687 8.90302 53.6765 9.90832 54.2969 11.6014C57.9796 6.28253 61.1038 2.51388 63.75 0C66.3513 1.09914 68.2198 3.26078 67.7069 3.70043C65.7651 5.45905 59.2802 12.5302 56.7155 16.7435C56.056 17.8427 55.4332 19.0517 55.4332 19.6379C55.4332 20.1875 55.7629 20.3707 56.1293 20.3707C57.8898 20.3707 61.4176 16.2147 64.4645 12.6253C65.6026 11.2845 66.6736 10.0228 67.5603 9.08621C69.6121 9.92888 71.7004 11.7241 71.1875 12.347C68.4763 15.5711 66.4246 18.2091 66.4246 19.7112C66.4246 20.1142 66.5711 20.3707 67.1207 20.3707C68.1466 20.3707 69.0991 19.4547 70.6746 17.5129C71.0043 17.1099 71.4073 17.1099 71.6638 17.7328C72.3599 19.4181 73.3858 20.3341 74.1918 20.3341C75.1444 20.3341 75.6207 19.4914 75.6207 18.2091C75.6207 17.3327 75.5137 16.3138 75.4217 15.4365C75.3521 14.7733 75.2909 14.191 75.2909 13.8125ZM16.194 13.3362C18.1358 13.3362 20.2608 12.2737 20.2608 10.1121C20.2608 8.80024 19.4466 7.59084 17.2708 7.22257C17.156 7.40192 17.042 7.58017 16.9287 7.75739C15.8231 9.4858 14.7804 11.116 13.7281 12.7095C14.3586 13.0636 15.156 13.3362 16.194 13.3362ZM35.8319 13.9957C35.8319 13.4095 35.4655 13.0065 34.8793 13.0065C33.4094 13.0065 31.1923 15.0693 30.149 17.0613C30.5341 17.2101 30.9862 17.2931 31.472 17.2931C34.0733 17.2931 35.8319 15.3147 35.8319 13.9957ZM45.4677 19.3082C45.4677 19.9677 45.834 20.4073 46.6034 20.4073C48.9849 20.4073 51.9526 16.0841 51.9526 14.3254C51.9526 13.5927 51.5496 13.153 50.8901 13.153C48.7285 13.153 45.4677 17.2565 45.4677 19.3082ZM76.0599 6.08207C75.2172 7.47431 73.9349 9.04974 73.4586 9.52603C71.2603 8.61008 69.2086 6.77819 69.5017 6.26525C70.3077 4.83638 71.6267 3.29758 72.103 2.82129C74.3012 3.73724 76.353 5.60577 76.0599 6.08207Z"
                        fill="#FF4438"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1878_297">
                        <rect width="85" height="26.5991" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            )}
            {category == "FastAPI" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/logo-teal.png"
                    width={200}
                    height={200}
                    alt="FastAPI logo"
                  />
                </div>
              </div>
            )}

            {category == "Tailwind" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/icons8-tailwind-css-48.png"
                    width={50}
                    height={50}
                    alt="tailwind logo"
                  />
                </div>
              </div>
            )}

            {category == "Vite" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/vitelogo.svg"
                    width={50}
                    height={50}
                    alt="Vite logo"
                  />
                </div>
              </div>
            )}

            {category == "Vue" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <svg
                    class="logo"
                    viewBox="0 0 128 128"
                    width="50"
                    height="50"
                    data-v-df6d64fc=""
                  >
                    <path
                      fill="#42b883"
                      d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
                      data-v-df6d64fc=""
                    ></path>
                    <path
                      fill="#35495e"
                      d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
                      data-v-df6d64fc=""
                    ></path>
                  </svg>{" "}
                </div>
              </div>
            )}

            {category == "Typescript" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] min-w-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/icons8-typescript-48.png"
                    width={50}
                    height={50}
                    alt="Typescript logo"
                  />
                </div>
              </div>
            )}

            {category == "Angular" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/shield-large.svg"
                    width={50}
                    height={50}
                    alt="Angular Logo"
                  />
                </div>
              </div>
            )}

            {category == "Next" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="120"
                    viewBox="0 0 394 79"
                    width="120"
                    className={` ${isThemeOn ? "fill-black " : "fill-white "}`}
                  >
                    <path
                      d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"
                      fill="var(--geist-foreground)"
                    ></path>
                    <path
                      d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"
                      fill="var(--geist-foreground)"
                    ></path>
                    <path
                      d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"
                      fill="var(--geist-foreground)"
                    ></path>
                    <path
                      d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"
                      fill="var(--geist-foreground)"
                    ></path>
                    <path
                      clipRule="evenodd"
                      d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
                      fill="var(--geist-foreground)"
                      fillRule="evenodd"
                    ></path>
                    <path
                      d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"
                      fill="var(--geist-foreground)"
                    ></path>
                    <path
                      d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"
                      fill="var(--geist-foreground)"
                    ></path>
                    <path
                      d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"
                      fill="var(--geist-foreground)"
                    ></path>
                  </svg>{" "}
                </div>
              </div>
            )}

            {category == "Remix" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <svg
                    x-comp="Wordmark"
                    height="24"
                    viewBox="0 0 659 165"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
                      fill="url(#paint0_linear)"
                    ></path>
                    <path
                      d="M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
                      fill="url(#paint1_linear)"
                    ></path>
                    <path
                      d="M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
                      fill="url(#paint2_linear)"
                    ></path>
                    <path
                      d="M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
                      fill="url(#paint3_linear)"
                    ></path>
                    <path
                      d="M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
                      fill="currentColor"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="591.052"
                        y1="47.1035"
                        x2="591.052"
                        y2="161.28"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="currentColor"></stop>
                        <stop
                          offset="1"
                          stop-color="currentColor"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="203.19"
                        y1="44.0317"
                        x2="203.19"
                        y2="164.352"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="currentColor"></stop>
                        <stop
                          offset="1"
                          stop-color="currentColor"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear"
                        x1="368.744"
                        y1="44.0317"
                        x2="368.744"
                        y2="161.28"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="currentColor"></stop>
                        <stop
                          offset="1"
                          stop-color="currentColor"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear"
                        x1="499.172"
                        y1="0"
                        x2="499.172"
                        y2="161.28"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="currentColor"></stop>
                        <stop
                          offset="1"
                          stop-color="currentColor"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            )}

            {category == "React Native" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/header_logo.svg"
                    width={100}
                    height={100}
                    alt="React Native logo"
                  />
                </div>
              </div>
            )}

            {category == "Flutter" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/flutter logo.svg"
                    width={150}
                    height={150}
                    alt="Flutter logo"
                  />
                </div>
              </div>
            )}

            {category == "Electron" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/electronlogo.svg"
                    width={100}
                    height={100}
                    alt="Electron js logo"
                  />
                </div>
              </div>
            )}

            {category == "Python" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/python-logo@2x.png"
                    width={200}
                    height={200}
                    alt="Python logo"
                  />
                </div>
              </div>
            )}

            {category == "Java" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/Java_programming_language_logo.svg.png"
                    width={50}
                    height={50}
                    alt="Java logo"
                  />
                </div>
              </div>
            )}

            {category == "MySQL" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/r.png"
                    width={80}
                    height={80}
                    alt="Mysql logo"
                  />
                </div>
              </div>
            )}

            {category == "PostgreSQL" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/elephant.png"
                    width={80}
                    height={80}
                    alt="PostgreSQL Logo"
                  />
                </div>
              </div>
            )}

            {category == "Docker" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <Image
                    src="/icons/OIP.png"
                    width={100}
                    height={100}
                    alt="Docker logo"
                  />
                </div>
              </div>
            )}

            {category == "Firebase" && (
              <div className="min-h-[150px] flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <Image
                    src="/icons/lockup.svg"
                    width={100}
                    height={100}
                    alt="Firebase logo"
                  />
                </div>
              </div>
            )}
            {category == "Golang" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <svg
                    height="78"
                    viewBox="0 0 207 78"
                    width="207"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <g fill="currentColor" fillRule="evenodd">
                      <path d="m16.2 24.1c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h35.7c.4 0 .5.3.3.6l-1.7 2.6c-.2.3-.7.6-1 .6z" />
                      <path d="m1.1 33.3c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h45.6c.4 0 .6.3.5.6l-.8 2.4c-.1.4-.5.6-.9.6z" />
                      <path d="m25.3 42.5c-.4 0-.5-.3-.3-.6l1.4-2.5c.2-.3.6-.6 1-.6h20c.4 0 .6.3.6.7l-.2 2.4c0 .4-.4.7-.7.7z" />
                      <g transform="translate(55)">
                        <path d="m74.1 22.3c-6.3 1.6-10.6 2.8-16.8 4.4-1.5.4-1.6.5-2.9-1-1.5-1.7-2.6-2.8-4.7-3.8-6.3-3.1-12.4-2.2-18.1 1.5-6.8 4.4-10.3 10.9-10.2 19 .1 8 5.6 14.6 13.5 15.7 6.8.9 12.5-1.5 17-6.6.9-1.1 1.7-2.3 2.7-3.7-3.6 0-8.1 0-19.3 0-2.1 0-2.6-1.3-1.9-3 1.3-3.1 3.7-8.3 5.1-10.9.3-.6 1-1.6 2.5-1.6h36.4c-.2 2.7-.2 5.4-.6 8.1-1.1 7.2-3.8 13.8-8.2 19.6-7.2 9.5-16.6 15.4-28.5 17-9.8 1.3-18.9-.6-26.9-6.6-7.4-5.6-11.6-13-12.7-22.2-1.3-10.9 1.9-20.7 8.5-29.3 7.1-9.3 16.5-15.2 28-17.3 9.4-1.7 18.4-.6 26.5 4.9 5.3 3.5 9.1 8.3 11.6 14.1.6.9.2 1.4-1 1.7z" />
                        <path
                          d="m107.2 77.6c-9.1-.2-17.4-2.8-24.4-8.8-5.9-5.1-9.6-11.6-10.8-19.3-1.8-11.3 1.3-21.3 8.1-30.2 7.3-9.6 16.1-14.6 28-16.7 10.2-1.8 19.8-.8 28.5 5.1 7.9 5.4 12.8 12.7 14.1 22.3 1.7 13.5-2.2 24.5-11.5 33.9-6.6 6.7-14.7 10.9-24 12.8-2.7.5-5.4.6-8 .9zm23.8-40.4c-.1-1.3-.1-2.3-.3-3.3-1.8-9.9-10.9-15.5-20.4-13.3-9.3 2.1-15.3 8-17.5 17.4-1.8 7.8 2 15.7 9.2 18.9 5.5 2.4 11 2.1 16.3-.6 7.9-4.1 12.2-10.5 12.7-19.1z"
                          fillRule="nonzero"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            )}

            {category == "MongoDB" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="150"
                    viewBox="0 0 1102 278"
                    width="150"
                    className={` ${isThemeOn ? "fill-black " : "fill-white "}`}
                  >
                    <path
                      d="M82.3229 28.6444C71.5367 15.8469 62.2485 2.84945 60.351 0.149971C60.1512 -0.0499903 59.8515 -0.0499903 59.6518 0.149971C57.7542 2.84945 48.4661 15.8469 37.6798 28.6444C-54.9019 146.721 52.2613 226.406 52.2613 226.406L53.1601 227.006C53.959 239.303 55.9565 257 55.9565 257H59.9514H63.9463C63.9463 257 65.9438 239.403 66.7428 227.006L67.6416 226.306C67.7414 226.306 174.905 146.721 82.3229 28.6444ZM59.9514 224.606C59.9514 224.606 55.1576 220.507 53.8592 218.407V218.208L59.6518 89.6325C59.6518 89.2326 60.2511 89.2326 60.2511 89.6325L66.0436 218.208V218.407C64.7453 220.507 59.9514 224.606 59.9514 224.606Z"
                      fill="currentColor"
                    />
                    <path
                      d="M260.501 197.588L215.845 89.2991L215.745 89H181.001V96.2791H186.608C188.31 96.2791 189.912 96.977 191.114 98.1736C192.315 99.3702 192.916 100.966 192.916 102.661L191.915 211.647C191.915 215.037 189.112 217.829 185.707 217.929L180 218.029V225.208H213.843V218.029L210.338 217.929C206.934 217.829 204.13 215.037 204.13 211.647V108.943L252.792 225.208C253.492 226.903 255.094 228 256.897 228C258.699 228 260.301 226.903 261.002 225.208L308.562 111.535L309.263 211.647C309.263 215.137 306.459 217.929 302.955 218.029H299.35V225.208H339V218.029H333.593C330.189 218.029 327.385 215.137 327.285 211.747L326.985 102.76C326.985 99.2704 329.788 96.4785 333.193 96.3788L339 96.2791V89H305.157L260.501 197.588Z"
                      fill="currentColor"
                    />
                    <path
                      d="M571.869 216.955C570.764 215.849 570.162 214.342 570.162 212.533V158.663C570.162 148.412 567.151 140.372 561.127 134.643C555.205 128.915 546.973 126 536.734 126C522.378 126 511.035 131.829 503.104 143.286C503.004 143.487 502.703 143.588 502.402 143.588C502.1 143.588 501.9 143.387 501.9 143.085L498.185 128.714H491.961L476 137.859V142.884H480.116C482.023 142.884 483.629 143.387 484.734 144.392C485.838 145.397 486.44 146.905 486.44 149.015V212.432C486.44 214.241 485.838 215.749 484.734 216.854C483.629 217.96 482.124 218.563 480.317 218.563H476.301V225.899H513.042V218.563H509.027C507.22 218.563 505.714 217.96 504.61 216.854C503.506 215.749 502.903 214.241 502.903 212.432V170.623C502.903 165.296 504.108 159.97 506.317 154.744C508.625 149.618 512.038 145.296 516.556 141.98C521.073 138.663 526.494 137.055 532.718 137.055C539.745 137.055 545.066 139.266 548.378 143.688C551.691 148.111 553.398 153.839 553.398 160.673V212.533C553.398 214.342 552.795 215.849 551.691 216.955C550.587 218.06 549.081 218.663 547.274 218.663H543.259V226H580V218.663H575.985C574.479 218.663 573.073 218.161 571.869 216.955Z"
                      fill="currentColor"
                    />
                    <path
                      d="M907.546 97.212C897.39 91.8041 886.039 89 873.792 89H826V96.3107H830.68C832.472 96.3107 834.065 97.0117 835.658 98.614C837.152 100.116 837.948 101.819 837.948 103.621V211.379C837.948 213.181 837.152 214.884 835.658 216.386C834.165 217.888 832.472 218.689 830.68 218.689H826V226H873.792C886.039 226 897.39 223.196 907.546 217.788C917.701 212.38 925.966 204.368 931.94 194.154C937.914 183.939 941 171.621 941 157.6C941 143.58 937.914 131.362 931.94 121.047C925.866 110.632 917.701 102.62 907.546 97.212ZM921.784 157.4C921.784 170.219 919.494 181.034 915.013 189.747C910.533 198.46 904.558 204.969 897.19 209.175C889.823 213.382 881.658 215.485 872.896 215.485H863.238C861.446 215.485 859.853 214.784 858.26 213.181C856.766 211.679 855.97 209.977 855.97 208.174V106.626C855.97 104.823 856.667 103.221 858.26 101.618C859.753 100.116 861.446 99.3151 863.238 99.3151H872.896C881.658 99.3151 889.823 101.418 897.19 105.624C904.558 109.83 910.533 116.34 915.013 125.053C919.494 133.765 921.784 144.581 921.784 157.4Z"
                      fill="currentColor"
                    />
                    <path
                      d="M1053.97 164.711C1049.55 159.603 1041.02 155.297 1030.99 152.993C1044.84 146.083 1051.96 136.369 1051.96 123.851C1051.96 117.041 1050.16 110.932 1046.54 105.724C1042.93 100.517 1037.81 96.3107 1031.29 93.4064C1024.76 90.5022 1017.13 89 1008.5 89H954.402V96.3107H958.718C960.524 96.3107 962.13 97.0117 963.736 98.614C965.242 100.116 966.045 101.819 966.045 103.621V211.379C966.045 213.181 965.242 214.884 963.736 216.386C962.231 217.888 960.524 218.689 958.718 218.689H954V226H1012.72C1021.65 226 1029.98 224.498 1037.51 221.493C1045.04 218.489 1051.06 214.083 1055.38 208.274C1059.79 202.466 1062 195.355 1062 187.143C1061.9 178.33 1059.29 170.92 1053.97 164.711ZM986.621 213.281C985.115 211.779 984.312 210.077 984.312 208.274V159.904H1012.22C1022.05 159.904 1029.58 162.407 1034.8 167.414C1040.02 172.422 1042.63 178.931 1042.63 186.943C1042.63 191.75 1041.42 196.457 1039.22 200.763C1036.91 205.17 1033.49 208.675 1028.88 211.379C1024.36 214.083 1018.74 215.485 1012.22 215.485H991.639C989.833 215.585 988.227 214.884 986.621 213.281ZM984.413 149.588V106.626C984.413 104.823 985.115 103.221 986.721 101.618C988.227 100.116 989.933 99.3151 991.74 99.3151H1004.99C1014.52 99.3151 1021.55 101.719 1025.97 106.325C1030.38 111.032 1032.59 117.041 1032.59 124.452C1032.59 132.063 1030.48 138.172 1026.37 142.779C1022.25 147.285 1016.03 149.588 1007.8 149.588H984.413Z"
                      fill="currentColor"
                    />
                    <path
                      d="M431.999 132.387C424.329 128.196 415.763 126 406.5 126C397.237 126 388.571 128.096 381.001 132.387C373.331 136.579 367.255 142.667 362.773 150.352C358.291 158.037 356 167.02 356 177C356 186.98 358.291 195.963 362.773 203.648C367.255 211.333 373.331 217.421 381.001 221.613C388.671 225.804 397.237 228 406.5 228C415.763 228 424.429 225.904 431.999 221.613C439.669 217.421 445.745 211.333 450.227 203.648C454.709 195.963 457 186.98 457 177C457 167.02 454.709 158.037 450.227 150.352C445.745 142.568 439.669 136.579 431.999 132.387ZM439.37 177C439.37 189.276 436.382 199.256 430.405 206.442C424.529 213.628 416.461 217.321 406.5 217.321C396.54 217.321 388.471 213.628 382.595 206.442C376.618 199.256 373.63 189.276 373.63 177C373.63 164.724 376.618 154.744 382.595 147.558C388.471 140.372 396.54 136.679 406.5 136.679C416.461 136.679 424.529 140.372 430.405 147.558C436.382 154.744 439.37 164.624 439.37 177Z"
                      fill="currentColor"
                    />
                    <path
                      d="M784.999 132.387C777.329 128.196 768.763 126 759.5 126C750.237 126 741.571 128.096 734.001 132.387C726.331 136.579 720.255 142.667 715.773 150.352C711.291 158.037 709 167.02 709 177C709 186.98 711.291 195.963 715.773 203.648C720.255 211.333 726.331 217.421 734.001 221.613C741.671 225.804 750.237 228 759.5 228C768.763 228 777.429 225.904 784.999 221.613C792.669 217.421 798.745 211.333 803.227 203.648C807.709 195.963 810 186.98 810 177C810 167.02 807.709 158.037 803.227 150.352C798.745 142.568 792.569 136.579 784.999 132.387ZM792.37 177C792.37 189.276 789.381 199.256 783.405 206.442C777.528 213.628 769.46 217.321 759.5 217.321C749.539 217.321 741.471 213.628 735.595 206.442C729.618 199.256 726.63 189.276 726.63 177C726.63 164.624 729.618 154.744 735.595 147.558C741.471 140.372 749.539 136.679 759.5 136.679C769.46 136.679 777.528 140.372 783.405 147.558C789.282 154.744 792.37 164.624 792.37 177Z"
                      fill="currentColor"
                    />
                    <path
                      d="M642.64 126C634.614 126 627.292 127.704 620.671 131.113C614.05 134.522 608.834 139.135 605.122 145.05C601.411 150.865 599.505 157.383 599.505 164.301C599.505 170.517 600.909 176.232 603.818 181.346C606.627 186.259 610.439 190.369 615.254 193.778L600.909 213.23C599.103 215.636 598.903 218.844 600.207 221.451C601.611 224.158 604.219 225.763 607.229 225.763H611.342C607.329 228.47 604.119 231.678 601.912 235.488C599.304 239.799 598 244.311 598 248.923C598 257.546 601.812 264.665 609.335 269.979C616.759 275.293 627.191 278 640.332 278C649.461 278 658.188 276.496 666.113 273.588C674.138 270.681 680.658 266.369 685.473 260.755C690.389 255.14 692.897 248.322 692.897 240.501C692.897 232.28 689.887 226.464 682.865 220.85C676.847 216.137 667.417 213.631 655.68 213.631H615.555C615.455 213.631 615.354 213.53 615.354 213.53C615.354 213.53 615.254 213.33 615.354 213.23L625.787 199.193C628.596 200.496 631.204 201.298 633.511 201.799C635.918 202.301 638.627 202.501 641.636 202.501C650.063 202.501 657.687 200.797 664.307 197.388C670.928 193.979 676.245 189.367 680.057 183.451C683.868 177.636 685.774 171.119 685.774 164.201C685.774 156.781 682.163 143.245 672.332 136.327C672.332 136.227 672.433 136.227 672.433 136.227L694 138.633V128.707H659.492C654.075 126.902 648.458 126 642.64 126ZM654.677 188.765C650.865 190.77 646.752 191.873 642.64 191.873C635.919 191.873 630 189.467 624.984 184.755C619.969 180.042 617.461 173.124 617.461 164.301C617.461 155.478 619.969 148.559 624.984 143.847C630 139.135 635.919 136.728 642.64 136.728C646.853 136.728 650.865 137.731 654.677 139.836C658.489 141.842 661.599 144.95 664.107 149.061C666.514 153.172 667.818 158.285 667.818 164.301C667.818 170.417 666.614 175.53 664.107 179.541C661.699 183.652 658.489 186.66 654.677 188.765ZM627.492 225.662H654.677C662.201 225.662 667.016 227.166 670.226 230.375C673.436 233.583 675.041 237.894 675.041 242.908C675.041 250.227 672.132 256.243 666.314 260.755C660.495 265.267 652.671 267.573 643.041 267.573C634.614 267.573 627.592 265.668 622.476 262.058C617.36 258.449 614.752 252.934 614.752 245.916C614.752 241.504 615.956 237.393 618.364 233.784C620.771 230.174 623.68 227.567 627.492 225.662Z"
                      fill="currentColor"
                    />
                    <path
                      d="M1082.35 224.327C1080.37 223.244 1078.88 221.669 1077.69 219.799C1076.6 217.831 1076 215.764 1076 213.5C1076 211.236 1076.6 209.071 1077.69 207.201C1078.78 205.232 1080.37 203.756 1082.35 202.673C1084.34 201.591 1086.52 201 1089 201C1091.48 201 1093.66 201.591 1095.65 202.673C1097.63 203.756 1099.12 205.331 1100.31 207.201C1101.4 209.169 1102 211.236 1102 213.5C1102 215.764 1101.4 217.929 1100.31 219.799C1099.22 221.768 1097.63 223.244 1095.65 224.327C1093.66 225.409 1091.48 226 1089 226C1086.62 226 1084.34 225.409 1082.35 224.327ZM1094.56 222.85C1096.24 221.965 1097.44 220.587 1098.43 219.012C1099.32 217.339 1099.82 215.469 1099.82 213.402C1099.82 211.335 1099.32 209.465 1098.43 207.791C1097.53 206.118 1096.24 204.839 1094.56 203.953C1092.87 203.067 1091.08 202.575 1089 202.575C1086.92 202.575 1085.13 203.067 1083.44 203.953C1081.76 204.839 1080.56 206.217 1079.57 207.791C1078.68 209.465 1078.18 211.335 1078.18 213.402C1078.18 215.469 1078.68 217.339 1079.57 219.012C1080.47 220.685 1081.76 221.965 1083.44 222.85C1085.13 223.736 1086.92 224.228 1089 224.228C1091.08 224.228 1092.97 223.835 1094.56 222.85ZM1083.64 219.406V218.52L1083.84 218.421H1084.44C1084.63 218.421 1084.83 218.323 1084.93 218.224C1085.13 218.028 1085.13 217.929 1085.13 217.732V208.579C1085.13 208.382 1085.03 208.185 1084.93 208.087C1084.73 207.89 1084.63 207.89 1084.44 207.89H1083.84L1083.64 207.791V206.906L1083.84 206.807H1089C1090.49 206.807 1091.58 207.102 1092.47 207.791C1093.37 208.48 1093.76 209.366 1093.76 210.547C1093.76 211.433 1093.47 212.319 1092.77 212.909C1092.08 213.598 1091.28 213.992 1090.29 214.091L1091.48 214.484L1093.76 218.126C1093.96 218.421 1094.16 218.52 1094.46 218.52H1095.05L1095.15 218.618V219.504L1095.05 219.602H1091.98L1091.78 219.504L1088.6 214.189H1087.81V217.732C1087.81 217.929 1087.91 218.126 1088.01 218.224C1088.21 218.421 1088.31 218.421 1088.5 218.421H1089.1L1089.3 218.52V219.406L1089.1 219.504H1083.84L1083.64 219.406ZM1088.7 213.008C1089.5 213.008 1090.19 212.811 1090.59 212.319C1090.98 211.925 1091.28 211.236 1091.28 210.449C1091.28 209.661 1091.08 209.071 1090.69 208.579C1090.29 208.087 1089.69 207.89 1089 207.89H1088.6C1088.4 207.89 1088.21 207.988 1088.11 208.087C1087.91 208.283 1087.91 208.382 1087.91 208.579V213.008H1088.7Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            )}

            {category == "Kotlin" && (
              <div className="flex flex-col items-center">
                <div className="min-h-[150px] flex items-center justify-center">
                  <svg
                    width="98"
                    height="22"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.314 1.067h-4.031L30.5 10.422V1.098H27.27v20.273H30.5v-9.82l8.814 9.82h4.177l-9.397-10.484 9.22-9.82Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M54.303 7.186c-1.153-.66-2.45-.994-3.901-.994-1.478 0-2.803.33-3.973.994a7.042 7.042 0 0 0-2.735 2.758c-.65 1.179-.976 2.515-.976 4.01 0 1.494.325 2.835.972 4.01a6.967 6.967 0 0 0 2.716 2.758c1.166.659 2.486.993 3.964.993 1.46 0 2.766-.33 3.923-.993a6.941 6.941 0 0 0 2.694-2.759c.642-1.178.963-2.515.963-4.01 0-1.494-.32-2.83-.963-4.009a6.949 6.949 0 0 0-2.684-2.758Zm-.204 9.328c-.357.74-.859 1.314-1.505 1.73-.646.415-1.392.622-2.233.622-.85 0-1.604-.207-2.26-.623a4.184 4.184 0 0 1-1.528-1.73c-.361-.74-.542-1.589-.542-2.555 0-.966.185-1.815.551-2.555a4.177 4.177 0 0 1 1.537-1.73c.656-.415 1.415-.623 2.278-.623.832 0 1.573.208 2.22.623a4.125 4.125 0 0 1 1.5 1.73c.353.74.529 1.59.529 2.555-.009.962-.19 1.815-.547 2.556ZM64.555 2.836h-3.132v2.52c0 .397-.095.695-.29.889-.194.198-.492.298-.899.298h-1.537v2.664h2.667v7.978c0 .83.167 1.562.506 2.194a3.591 3.591 0 0 0 1.442 1.472c.624.348 1.36.52 2.21.52h2.391v-2.782h-1.798c-.466 0-.841-.163-1.13-.483-.29-.325-.434-.75-.434-1.282V9.207h3.448V6.543h-3.448V2.836h.004ZM73.68.286h-3.186V21.37h3.187V.286ZM80.498.312H77.28v3.273h3.218V.312ZM80.466 6.544H77.28V21.37h3.186V6.544ZM96.67 8.99a4.969 4.969 0 0 0-1.899-2.054c-.818-.492-1.772-.74-2.866-.74-1.161 0-2.178.284-3.05.848-.697.447-1.257 1.052-1.7 1.797l-.018-2.298H84.09V21.37h3.191v-8.298c0-.8.154-1.513.457-2.136a3.39 3.39 0 0 1 1.293-1.45c.556-.342 1.202-.514 1.948-.514.669 0 1.238.14 1.717.42.48.28.841.682 1.085 1.201.249.52.37 1.142.37 1.87v8.907h3.192v-9.355c0-1.138-.226-2.149-.674-3.025Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M20 21H0V1h20L9.793 10.855 20 21Z"
                      fill="url(#kotlin-logo-large_svg__a)"
                    ></path>
                    <defs>
                      <radialGradient
                        id="kotlin-logo-large_svg__a"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(19.335 1.822) scale(22.9097)"
                      >
                        <stop offset="0.003" stop-color="#EF4857"></stop>
                        <stop offset="0.469" stop-color="#D211EC"></stop>
                        <stop offset="1" stop-color="#7F52FF"></stop>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <section className="relative pt-[110px] mt-3">
        <div className="container">
          <div className=" animate-fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-[44px] md:leading-tight">
              How it Works?
            </h2>
            <p className="text-base text-body">{project.working}</p>
          </div>
        </div>
        <div className="container max-w-[1390px]">
          <div className="rounded-2xl px-5 pb-14 pt-14 shadow-card md:pb-1 lg:pb-5 lg:pt-20 xl:px-10">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="animate-fadeInUp  mx-auto mb-[60px] max-w-[310px] text-center">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl border-foreground border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="CurrentColor"
                    >
                      <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold sm:text-[22px] xl:text-[26px]">
                    Sign in / Register
                  </h3>
                  <p className="text-base text-body">
                    Quickly sign up or log in to access your personalized{" "}
                    {project.title} dashboard.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className=" animate-fadeInUp mx-auto mb-[60px] max-w-[310px] text-center">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl border-foreground border-2">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_40_15)">
                        <path
                          d="M20 36.6667C10.795 36.6667 3.33333 29.205 3.33333 20C3.33333 10.795 10.795 3.33337 20 3.33337C29.205 3.33337 36.6667 10.795 36.6667 20C36.6667 29.205 29.205 36.6667 20 36.6667ZM11.6883 30.4267C14.0476 32.3129 16.9795 33.3382 20 33.3334C23.2833 33.3334 26.2883 32.1467 28.6117 30.18C27.5262 29.0663 26.2284 28.1815 24.7951 27.578C23.3617 26.9746 21.8219 26.6647 20.2667 26.6667C18.6543 26.6648 17.0592 26.9981 15.5824 27.6454C14.1057 28.2927 12.7796 29.2398 11.6883 30.4267ZM9.36 28.0334C10.7608 26.5468 12.4511 25.3629 14.3269 24.5546C16.2027 23.7462 18.2241 23.3306 20.2667 23.3334C22.2361 23.3308 24.1866 23.7173 26.0062 24.4707C27.8259 25.224 29.4788 26.3294 30.87 27.7234C32.2968 25.7152 33.1394 23.3511 33.3043 20.8932C33.4692 18.4354 32.9499 15.9798 31.8041 13.7991C30.6584 11.6184 28.9309 9.79775 26.8133 8.53912C24.6957 7.28049 22.2708 6.6331 19.8077 6.66879C17.3445 6.70448 14.9394 7.42185 12.8592 8.7413C10.779 10.0608 9.10493 11.9307 8.02282 14.1437C6.94071 16.3567 6.49282 18.8262 6.72886 21.2783C6.9649 23.7304 7.87562 26.0691 9.36 28.035V28.0334ZM20 21.6667C18.2319 21.6667 16.5362 20.9643 15.286 19.7141C14.0357 18.4638 13.3333 16.7682 13.3333 15C13.3333 13.2319 14.0357 11.5362 15.286 10.286C16.5362 9.03575 18.2319 8.33337 20 8.33337C21.7681 8.33337 23.4638 9.03575 24.714 10.286C25.9643 11.5362 26.6667 13.2319 26.6667 15C26.6667 16.7682 25.9643 18.4638 24.714 19.7141C23.4638 20.9643 21.7681 21.6667 20 21.6667ZM20 18.3334C20.8841 18.3334 21.7319 17.9822 22.357 17.3571C22.9821 16.7319 23.3333 15.8841 23.3333 15C23.3333 14.116 22.9821 13.2681 22.357 12.643C21.7319 12.0179 20.8841 11.6667 20 11.6667C19.1159 11.6667 18.2681 12.0179 17.643 12.643C17.0179 13.2681 16.6667 14.116 16.6667 15C16.6667 15.8841 17.0179 16.7319 17.643 17.3571C18.2681 17.9822 19.1159 18.3334 20 18.3334Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_40_15">
                          <rect
                            width="40"
                            height="40"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold sm:text-[22px] xl:text-[26px]">
                    Setup your profile
                  </h3>
                  <p className="text-base text-body">
                    Customize your profile to reflect {project.title} features.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className=" animate-fadeInUp  mx-auto mb-[60px] max-w-[310px] text-center">
                  <div className="mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-3xl border-foreground border-2">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_40_18)">
                        <path
                          d="M5.26834 7.44836C7.20178 5.51458 9.79501 4.38351 12.5277 4.28211C15.2603 4.18072 17.9302 5.11651 20.0017 6.9017C22.0713 5.11948 24.7377 4.18475 27.467 4.28463C30.1964 4.38452 32.7873 5.51165 34.7211 7.44037C36.6549 9.3691 37.7888 11.9571 37.8959 14.6862C38.0029 17.4153 37.0751 20.0841 35.2983 22.1584L22.3567 35.1417C21.7621 35.7365 20.9646 36.0845 20.1242 36.1161C19.2838 36.1476 18.4625 35.8603 17.825 35.3117L17.6417 35.1434L4.70168 22.1584C2.92583 20.0859 1.99764 17.4195 2.1027 14.6923C2.20776 11.9651 3.33832 9.37805 5.26834 7.44836ZM7.62501 9.80503C6.26208 11.1683 5.47643 13.0041 5.43112 14.9313C5.38581 16.8585 6.08432 18.7292 7.38168 20.155L7.62501 20.4117L20 32.7867L28.8383 23.9467L22.9467 18.055L21.18 19.8217C20.7158 20.2861 20.1646 20.6546 19.558 20.906C18.9514 21.1575 18.3012 21.287 17.6445 21.2871C16.3183 21.2874 15.0463 20.7609 14.1083 19.8234C13.1704 18.8858 12.6432 17.6141 12.6429 16.2879C12.6426 14.9617 13.1691 13.6897 14.1067 12.7517L17.61 9.2467C16.2158 8.13399 14.4707 7.55451 12.6878 7.61224C10.9049 7.66997 9.20099 8.36112 7.88168 9.5617L7.62501 9.80503ZM21.7683 14.5184C22.0809 14.2059 22.5047 14.0304 22.9467 14.0304C23.3886 14.0304 23.8125 14.2059 24.125 14.5184L31.195 21.5884L32.375 20.4117C33.7608 19.0269 34.5497 17.1549 34.5731 15.196C34.5964 13.237 33.8524 11.3467 32.5 9.92929C31.1477 8.51185 29.2944 7.67981 27.3366 7.61112C25.3787 7.54242 23.4717 8.24253 22.0233 9.5617L21.7683 9.80503L16.465 15.1084C16.1761 15.3971 16.0033 15.7818 15.9793 16.1895C15.9554 16.5972 16.0819 16.9995 16.335 17.32L16.465 17.465C16.7537 17.7539 17.1384 17.9267 17.5461 17.9507C17.9538 17.9747 18.3561 17.8481 18.6767 17.595L18.8217 17.465L21.7683 14.5184Z"
                          fill="currentColor"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_40_18">
                          <rect
                            width="40"
                            height="40"
                            fill="currentColor"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold  sm:text-[22px] xl:text-[26px">
                    Enjoy the features!
                  </h3>
                  <p className="text-base text-body">
                    Enjoy {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
