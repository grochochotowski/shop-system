import "../styles/userCeo.css"

function UserCeo() {

    const [position, setPosition] = useState("");
    const [containerHeight, setContainerHeight] = useState("");
    const [formWidth, setFormWidth] = useState("");
    const [listWidth, setListWidth] = useState("");
    const [isResizing, setIsResizing] = useState(false);
    const [users, setUsers] = useState([]);
    const [checkBoxObj, setCheckBoxObj] = useState({
        idCheck: true,
        positionCheck: true,
        loginCheck: true,
        firstNameCheck: true,
        secondNameCheck: true,
        lastNameCheck: true,
        emailCheck: true,
        phoneNumberCheck: true
    });
    const uniqueShopIds = [0, 6, 7];


    // fetch api data - get info about users and thir shops
    useEffect(() => {
        async function getUserData() {
            const response = await fetch("https://localhost:7057/api/user");
            const data = await response.json();
            setUsers(data);
        }
        getUserData();
    }, []);


    // create user list in a shop
    function getShopWithUsers(shopId) {
        if (users.length > 0) {
            var usersInShop;
            var title;
            if (shopId !== 0) {
                usersInShop =
                    users
                    .filter(user => user.shop && user.shop.id === shopId)
                    .map((user) => {
                        if (!title) title = user.shop.code;
                        return (
                            {
                                userId: user.id,
                                firstName: user.firstName,
                                secondName: user.secondName,
                                lastName: user.lastName,
                                login: user.login,
                                email: user.email,
                                phoneNumber: user.phoneNumber,
                                position: user.position.name
                            }
                        );
                    });
            }
            else {
                usersInShop =
                    users
                    .filter(user => user.shopId == null)
                    .map((user) => {
                        if (!title) title = "No Shop";
                        return (
                            {
                                userId: user.id,
                                firstName: user.firstName,
                                secondName: user.secondName,
                                lastName: user.lastName,
                                login: user.login,
                                email: user.email,
                                phoneNumber: user.phoneNumber,
                                position: user.position.name
                            }
                        );
                    });
            }
            return(
                <ShopUserListElement
                    key={shopId}
                    title={title} 
                    collapsed={true}
                    elements={usersInShop}
                    checkedBoxes={checkBoxObj}
                />
            );
        }
    }
    
    // check boxes changing handler
    function checkBoxChangeHandler(what) {
        setCheckBoxObj((prev) => ({
            ...prev,
            [what]: !prev[what]
        }));
    }

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


    // Function which are connected to postition drop down menu
    function setNewPosition(e) {
        if (e.target.value === "choose") setPosition("")
        else setPosition(e.target.value);
    }
    function RenderShopIdInput() {
        if (["manager", "deputy-manager", "decorator", "shop-assistant"].includes(position))
            return <input type="text" className="add-shopID" placeholder="ShopID"/>
        return null;
    }


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