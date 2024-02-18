function Cancel() {
    return (
        <>
            <div class="content">
                <div class="pop" onclick="openNav()"><i class='bx bxs-hand-right'></i></div>

                <div class="mob-area">
                    {/* <!--this is where my new content should go--> */}
                    <div class="checkout">
                        <p class="msg">Sorry we did not receive your payment</p>
                        <i class='bx bx-x'></i><i class='bx bx-sad' ></i><br/>
                            <a href="/"><button>back to home</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cancel;