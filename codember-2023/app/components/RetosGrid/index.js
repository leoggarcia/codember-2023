"use client";

import { useRouter } from "next/navigation";

function RetosGrid() {
	const router = useRouter();

	return (
		<div className="flex flex-wrap justify-center mt-5 gap-5">
			<div
				className="w-1/3 cursor-pointer p-5 hover:bg-green-100 hover:bg-opacity-10"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23DCFCE7FF' stroke-width='4' stroke-dasharray='19%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
				}}
				onClick={() => {
					router.push("/reto-1");
				}}
			>
				<p className="font-mono text-green-100 hover:text-white">
					Reto #1
				</p>
				<h2 className="text-yellow-100 font-mono text-lg mb-1.5">Mensajes encriptados</h2>
				<p className="font-mono text-green-100">
					Un espía está enviando mensajes encriptados. <br />
					Tu misión es crear un programa que nos ayude a buscar
					patrones...
				</p>
			</div>
			<div
				className="w-1/3 cursor-pointer p-5 hover:bg-green-100 hover:bg-opacity-10"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23DCFCE7FF' stroke-width='4' stroke-dasharray='19%2c 6' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
				}}
				onClick={() => {
					router.push("/reto-2");
				}}
			>
				<p className="font-mono text-green-100 hover:text-white">
					Reto #2
				</p>
				<h2 className="text-yellow-100 font-mono text-lg mb-1.5">Mini Compiler Challenge</h2>
				<p className="font-mono text-green-100">
					Tu tarea es crear un mini compilador que interprete y
					ejecute programas escritos en este lenguaje de símbolos.
				</p>
			</div>
		</div>
	);
}

export default RetosGrid;
