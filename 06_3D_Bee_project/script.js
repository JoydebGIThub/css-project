const beeModel= document.getElementById("bee-model");
const sections = Array.from(document.querySelectorAll("section"));

const shiftPosition = [0, -20, 0, 25];
const cameraOrbits = [[90, 90], [-45, 90], [-180, 0], [45, 90]]

const sectionOffset = sections.map(section => section.offsetTop);
// console.log(sectionOffset);
const lastSectionIndex = sections.length - 1;

const interpolate = (start, end, progress) => start + (end - start) * progress;

const getScrollProgress = scrollY => {
    for (let i = 0; i < lastSectionIndex; i++) {
        if (scrollY >= sectionOffset[i] && scrollY < sectionOffset[i+1]) {
            return i + (scrollY - sectionOffset[i]) / (sectionOffset[i+1]-sectionOffset[i]);
        }
    }
    return lastSectionIndex;
};

window.addEventListener("scroll",()=>{
    const scrollProgress =  getScrollProgress(window.scrollY);
    const sectionIndex = Math.floor(scrollProgress);
    const sectionProgress = scrollProgress - sectionIndex;
    // console.log(sectionIndex);
    const currentShift = interpolate(
        shiftPosition[sectionIndex],
        shiftPosition[sectionIndex+1] ?? shiftPosition[sectionIndex],
        sectionProgress
    );

    const currentOrbit= cameraOrbits[sectionIndex].map((val, i)=>
        interpolate(val, cameraOrbits[sectionIndex+1]?.[i] ?? val, sectionProgress)
    );
    beeModel.style.transform = `translateX(${currentShift}%)`;
    beeModel.setAttribute("camera-orbit", `${currentOrbit[0]}deg ${currentOrbit[1]}deg`)
});