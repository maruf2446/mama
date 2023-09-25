

const ConsultBox = () => {
    return (
        <div className="flex py-10 px-20 bg-blue-800 max-w-screen-xl mx-auto rounded-2xl">
            <div className="text-white italic">
                <h1 className="text-5xl">Start your transformation</h1>
                <div className="font-semibold text-xl mt-4">
                    <p>We are ready to serve as strategic partners to provide your organisation with
                    </p>
                    <p>the support you need.</p>
                </div>
            </div>
            <div className="pl-36 mt-9">
                <button  className="border px-4 py-2 bg-orange-500 text-white font-semibold text-2xl rounded-md">Talk to us</button>
            </div>
        </div>
    );
};

export default ConsultBox;