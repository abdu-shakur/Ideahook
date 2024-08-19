function Hp(props){


    const userItem = props.userInf;

    const listItem = userItem.map(item =>   <div>
                                                <li><b>Username: </b>{item.userName}</li>
                                                <li><b>Age: </b>{item.Age}</li>
                                                <hr/>
                                            </div>);
    return(
    <div>
        <h1>Welcome {props.name} </h1>
        <h2>User Information</h2>
        <ul>{listItem}</ul>
    </div>
    )
}
Hp.defaultProps = {
        name: 'Guest',
}
export default Hp