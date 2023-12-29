function Button(props) {

    const background = {backgroundImage: `url("../images/${props.img}")`}
    console.log(background);

    return(
        <div className="go-to-panel" style={background}>
            <h3>{props.title}</h3>
            {props.isShopDependant ? (
                <input type="text" placeholder="Shop ID" />
            ) : null}
        </div>
    );
}

export default Button;