"use client";

import { useRouter } from "next/navigation";

function Reto_1() {
	const router = useRouter();
	return (
		<main className="h-screen text-white p-10 text-white">
			<div className="flex m-auto w-fit gap-10">
				<button
					onClick={() => {
						router.push("/");
					}}
					className="font-mono text-green-100 underline"
				>
					{"← Regresar "}
				</button>
				<button className="font-mono text-green-100 underline">
					{"↓ Ir a la resolución "}
				</button>
			</div>
			<div className="font-mono text-green-100 text-lg leading-10">
				<h3 className="text-yellow-300">** El reto **</h3>
				<p>Un espía está enviando mensajes encriptados.</p>
				<p>Tu misión es crear un programa que nos ayude a buscar patrones...</p>
				<p>
					Los mensajes son palabras separadas por espacios como este:
					<br />
					<span className="text-yellow-100">
						gato perro perro coche Gato peRRo sol
					</span>
				</p>
				<p>
					Necesitamos que el programa nos devuelva el número de veces que
					aparece cada palabra en el mensaje, independientemente de si está en
					mayúsculas o minúsculas.
				</p>
				<p>
					El resultado será una cadena de texto con la palabra y el número de
					veces que aparece en el mensaje, con este formato:
					<br />
					<span className="text-yellow-100">gato2perro3coche1sol1</span>
				</p>
				<p>
					¡Las palabras son ordenadas por su primera aparición en el mensaje!
				</p>
				<h3 className="text-yellow-300">** Más ejemplos: **</h3>
				<p>
					llaveS casa CASA casa llaves{" "}
					<span className="text-yellow-100">-&gt;</span> llaves2casa3
					<br />
					taza ta za taza <span className="text-yellow-100">-&gt;</span>{" "}
					taza2ta1za1
					<br />
					casas casa casasas <span className="text-yellow-100">-&gt;</span>{" "}
					casas1casa1casas1
					<br />
				</p>
			</div>
		</main>
	);
}

export default Reto_1;
