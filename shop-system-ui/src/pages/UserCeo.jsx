import React, {useState, useEffect} from "react"
import "../styles/userCeo.css"

function UserCeo() {
    const [containerHeight, setContainerHeight] = useState("");
    const [formWidth, setFormWidth] = useState("");
    const [listWidth, setListWidth] = useState("");
    const [isResizing, setIsResizing] = useState(false);


    

    // Calculate width of 2 main sections based on size-bar position
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isResizing) {
                const sizeBarRect = document.querySelector(".size-bar").getBoundingClientRect();
                const containerRect = document.querySelector(".user-ceo-container").getBoundingClientRect();
              
                const cursorPosition = e.clientX - containerRect.left;
                let sizeBarLeftOffset = cursorPosition - sizeBarRect.width / 2;
      
                sizeBarLeftOffset = Math.max(containerRect.width * 0.2, Math.min(containerRect.width * 0.8, sizeBarLeftOffset));

                setFormWidth(`${sizeBarLeftOffset}px`);
                setListWidth(`calc(100% - ${sizeBarLeftOffset}px)`);
            }
        };
        const handleMouseUp = (e) => {
            setIsResizing(false);
        };

        if (isResizing) {
            document.body.style.userSelect = 'none';
            document.body.style.cursor = 'none';
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
        }

        return () => {
            document.body.style.userSelect = 'auto';
            document.body.style.cursor = 'auto';
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isResizing]);

    const handleMouseDown = () => {
        setIsResizing(prev => !prev);
    };

    // Calculate the height of container
    useEffect(() => {
        const updateContainerHeight = () => {
            const header = document.getElementsByTagName('header')[0];
            const headerHeight = header.getBoundingClientRect().height;
            setContainerHeight(`calc(100% - ${headerHeight}px)`);
        };

        window.addEventListener('resize', updateContainerHeight);
        updateContainerHeight();

        return () => {
          window.removeEventListener('resize', updateContainerHeight);
        };
    }, []); 


    // Render
    return (
        <>
            <div className="user-ceo-container" style={{ height: containerHeight }}>
                
                <div className={`size-bar ${isResizing ? 'resizing' : ''}`} onMouseDown={handleMouseDown}></div>
                
            </div>
        </>
    );
                

}

export default UserCeo;