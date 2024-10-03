export default function ResumeFrame(){
    return(
        <div className="flex justify-center">
        <div className="w-1/2 justify-center px-2 border-2 border-foreground rounded-lg">
            <div style={{width: '100%',height: '600px',}}>
                <iframe
                src="/resume"
                width="100%"
                height="90%"
                style={{border: 'none'}}
                title="Resume"
                />
            </div>
        </div>
        </div>
    )
}