function Button(props) {

    const background = {backgroundImage: `url("../images/${props.img}")`}

    return(
        <div className="go-to-panel">
            <div className="bg" style={background}></div>
            <div className="content">
                <h3>{props.title}</h3>
                {props.isShopDependant ? (
                    <input type="text" placeholder="Shop ID" />
                ) : null}
            </div>
        </div>
    );
}

export default Button;