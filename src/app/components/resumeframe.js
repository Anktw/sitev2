export default function ResumeFrame(){
    return(
        <div className="flex justify-center h-screen px-0 md:px-5 lg:px-8 mt-2 md:mt-6 lg:mt-10 ">
        <div className="relative overflow-hidden h-[400px] w-[600px] justify-center border border-foreground rounded-md">
            
                <iframe
                src="/resume"
                style={{border: 'none'}}
                title="Resume"
                className="absolute top-[-80px] left-[0px] h-[auto] w-[1000px]"
                />
        </div>
        </div>
    )
}