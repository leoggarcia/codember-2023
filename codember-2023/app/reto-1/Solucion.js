"use client";

import { useState } from "react";

function Solucion() {
	const [textoDesencriptado, setTextoDesencriptado] = useState([]);

	async function desencriptarTexto(texto) {
		if (texto.length > 0) {
			const textoSeparado = texto.trim().split(" ");
			const contadorPalabras = [];

			textoSeparado.forEach((palabra) => {
				const palabraMinustcula = palabra.toLowerCase();
				const palabraExiste = contadorPalabras.find((item) => {
					if (item.palabra === palabraMinustcula) {
						return true;
					} else {
						return false;
					}
				});

				if (palabraExiste) {
					contadorPalabras.map((item) => {
						if (item.palabra === palabraMinustcula) {
							return {
								...item,
								contador: item.contador++,
							};
						} else {
							return item;
						}
					});
				} else {
					contadorPalabras.push({
						palabra: palabraMinustcula,
						contador: 1,
					});
				}
			});

			await setTextoDesencriptado(contadorPalabras);

			//SCROLL TO THE TEXT
			document
				.querySelector("#textoDesencriptado")
				.scrollIntoView({ block: "end", behavior: "smooth" });
		}else{
			setTextoDesencriptado([]);
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
					desencriptarTexto(e.target.value);
				}}
			></textarea>
			<p className="font-mono text-green-100 text-xs">
				*El texto es desencriptado automaticamente
			</p>
			{textoDesencriptado.length > 0 && (
				<div className="mt-6 font-mono" id="textoDesencriptado">
					{/* HERE GOES THE SOLUTION */}
					<h3 className="text-yellow-300 font-mono text-lg">
						** Texto desencriptado **
					</h3>
					<p className="text-green-500 text-base break-all">
						{textoDesencriptado?.map((palabra) => {
							return palabra.palabra + palabra.contador + "";
						})}
					</p>
				</div>
			)}
		</div>
	);
}

export default Solucion;
