import React, { useState } from "react"
export const Box = () => {
    const [message, setMessage] = useState<string>('')
    const [totalTime, setTotalTime] = useState<number>(-1)
    const [clickedButton, setClickedButton] = useState<boolean>(false)

    function calculateTime() {
        setClickedButton(true);
        const regex = /[0-9]{1,3}\s?horas|[0-9]{1,3}h/g
        let substring;
        let timeCount = -1
        do {
            substring = regex.exec(message);
            if (substring) {
                console.log(substring[0])
                timeCount += parseInt(substring[0].replace(' horas', '').replace('h', '').replace(' h', ''))
            }
        } while (substring);
        setTotalTime(timeCount === -1 ? -1 : timeCount+1);
    }

    return (
        <>
            <div className="w-[700px] max-w-[700px] sm:w-[85vw] sm:px-6 md:w-[70vw] h-[80vh] rounded-lg absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-gradient-to-r  from-[#7de3fc36] to-[#b9b6e53c]">
                <div className="w-full py-8 text-center text-white">
                    <h1 className="font-bold text-2xl">Calculadora de tempo atendido</h1>
                    <label htmlFor="message" className="text-lg block mt-5">Insira aqui todos os seus atendimentos</label>
                    <textarea onChange={(event) => {setMessage(event.target.value)}} value={message} name="message" id="message" className="text-white w-[40vw] lg:w-[400px] sm:w-[80%] max-w-[400px] font-medium bg-[#c5c5c556] text-lg outline-none rounded max-h-96  leading-6 mt-4  h-[35vh] p-4"></textarea>
                    <button onClick={calculateTime} className="group text-white relative m-auto mt-5 block overflow-hidden rounded bg-black bg-gradient-to-r from-[#ffffff30] to-[#ffffff57]  px-12 py-3 text-lg font-medium hover:text-cyan-300	 focus:outline-none focus:ring  active:text-white">
                        Calcular
                    </button>
                    {
                        totalTime >= 0 ? 
                        <div className="mt-6">
                            <p className="text-lg">O tempo total atendido foi de: </p>
                            <p className="font-medium text-7xl mt-7 text-cyan-300">{totalTime} {totalTime > 1 ? 'horas':'hora'}</p>
                        </div>
                        :                        
                        clickedButton &&
                        <div className="mt-10">
                            <p className="text-red-400 text-lg font-bold	">Insira um texto válido</p>
                        </div>
                    }  
                </div>
            </div>
            <div className="sm:w-full text-center absolute text-white left-1/2 -translate-x-1/2 top-full -translate-y-10">
                Desenvolvido por Luan Cardoso
            </div>
        </>
    )
}