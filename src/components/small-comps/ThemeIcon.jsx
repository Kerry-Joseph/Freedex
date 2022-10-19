export default function ThemeIcon({ modeSwitch })  {
    if(modeSwitch === 'float-right'){
        return (
            <div
            className="absolute rounded-xl left-1 top-[.2rem] h-5 w-5 bg-FGI_blue">
                <div
                className="absolute bg-FGI_dark_blue w-[.85rem] h-4 -left-[.1rem] top-0.5 rounded-xl">
                </div>
            </div>
        )
    } else {
        return (
            <div
                className="absolute rounded-xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-6 w-6 bg-FGI_blue">
                    
                    <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-FGI_dark_blue">
                    </div>
                    
                    <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-FGI_dark_blue rotate-[20deg]">
                    </div>
                    
                    <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-FGI_dark_blue rotate-[40deg]">
                    </div>
                    
                    <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-FGI_dark_blue rotate-[60deg]">
                    </div>
                    
                    <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-FGI_dark_blue rotate-[80deg]">
                    </div>
                    
                    <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-FGI_dark_blue rotate-[100deg]">
                    </div>
                    
                    <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-FGI_dark_blue rotate-[120deg]">
                    </div>
                    
                    <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-FGI_dark_blue rotate-[140deg]">
                    </div>
                    
                    <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-FGI_dark_blue rotate-[160deg]">
                    </div>
                    
                    <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-0.5 bg-FGI_dark_blue rotate-[100deg]">
                    </div>
                    
                    <div
                    className="absolute rounded-xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[1.1rem] w-[1.1rem] bg-FGI_dark_blue">
                    </div>

                    <div
                    className="absolute rounded-xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[.8rem] w-[.8rem] bg-FGI_blue">
                    </div>

                </div>
        )
    }
}