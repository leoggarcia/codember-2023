"use client";

import { useState } from "react";

function SolucionReto2() {
	const [textoCompilado, setTextoCompilado] = useState("");
	const [textoACompilar, setTextoACompilar] = useState("");

	async function compilar() {
		setTextoCompilado("");

		const texto = textoACompilar.trim();
		const textArray = texto.split("");
		const prints = [];

		if (textArray.length > 0) {
			let newHead = 0;

			textArray.forEach((item) => {
				if (item === "#") {
					newHead++;
				} else if (item === "@") {
					newHead--;
				} else if (item === "*") {
					newHead = newHead * newHead;
				} else if (item === "&") {
					prints.push(newHead);
				}
			});

			await setTextoCompilado(prints.join(""));

			//SCROLL TO THE TEXT
			document
				?.querySelector("#textoCompilado")
				?.scrollIntoView({ block: "end", behavior: "smooth" });
		}
	}

	return (
		<div className="mt-10" id="solucion">
			<h3 className="text-yellow-300 font-mono text-lg">
				** Probar solución: **
			</h3>
			<textarea
				rows="4"
				className="bg-green-100 w-full h-20 bg-opacity-10 font-mono text-white text-base p-2"
				onChange={(e) => {
					setTextoACompilar(e.target.value);
				}}
			></textarea>
			<button
				onClick={() => {
					compilar();
				}}
				className="font-mono text-green-100 underline"
			>
				{"Compilar →"}
			</button>
			{textoCompilado.length > 0 && (
				<div className="mt-6 font-mono" id="textoCompilado">
					{/* HERE GOES THE SOLUTION */}
					<h3 className="text-yellow-300 font-mono text-lg">
						** Texto desencriptado **
					</h3>
					<p className="text-green-500 text-base break-all">
						{textoCompilado}
					</p>
				</div>
			)}
		</div>
	);
}

export default SolucionReto2;
