function Success() {

    return (
        <>
            <div class="content">
                <div class="pop" onclick="openNav()" ><i class='bx bxs-hand-right'></i></div>

                <div class="mob-area">
                    {/* <!--this is where my new content should go--> */}
                    <div class="checkout">
                        <p class="msg">Payment Successfull<br/> Your premium features unlocked <i class='bx bxs-crown'></i></p>
                        <i class='bx bx-message-square-check'></i><i class='bx bx-happy-heart-eyes' ></i><br/>
                            <a href="/"><button>back to home</button></a>
                    </div>

                </div>
            </div>
        </>
    );

}

export default Success;
