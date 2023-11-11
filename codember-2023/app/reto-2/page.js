"use client";

import { useRouter } from "next/navigation";
import SolucionReto2 from "./Solucion";

function Reto_2() {
	const router = useRouter();
	return (
		<main className="min-h-screen text-white p-10 text-white">
			<div className="flex m-auto w-fit gap-10">
				<button
					onClick={() => {
						router.push("/");
					}}
					className="font-mono text-green-100 underline"
				>
					{"← Regresar "}
				</button>
				<a
					className="font-mono text-green-100 underline"
					href="#solucion"
				>
					{"↓ Ir a la resolución "}
				</a>
			</div>
			<div className="font-mono text-green-100 text-lg leading-10">
				<div className="text-white">
					<h3 className="text-yellow-300">
						** Mini Compiler Challenge **
					</h3>
					<p>
						En el mundo del espionaje, se utiliza un lenguaje de
						codificación con símbolos que realizan operaciones
						matemáticas simples.
					</p>
					<p>
						Tu tarea es crear un mini compilador que interprete y
						ejecute programas escritos en este lenguaje de símbolos.
					</p>
					<p>Las operaciones del lenguaje son las siguientes:</p>
					<ul className="text-yellow-100">
						<li>&quot;#&quot; Incrementa el valor numérico en 1.</li>
						<li>&quot;@&quot; Decrementa el valor numérico en 1.</li>
						<li>&quot;*&quot; Multiplica el valor numérico por sí mismo.</li>
						<li>&quot;&amp;&quot; Imprime el valor numérico actual.</li>
					</ul>
					<p>
						El valor numérico inicial es 0 y las operaciones deben
						aplicarse en elorden en que aparecen en la cadena de
						símbolos.
					</p>
					<h3 className="text-yellow-300">
						** Ejemplos de entrada: **
					</h3>
					<p>
						Entrada: &quot;##*&amp;&quot;
						<br />
						Salida esperada: &quot;4&quot;
						<br />
						Explicación: Incrementa (1), incrementa (2), multiplica
						(4), imprime (4).
					</p>
					<p>
						Entrada: &quot;&amp;##&amp;*&amp;@&amp;&quot;
						<br />
						Salida esperada: &quot;0243&quot;
						<br />
						Explicación: Imprime (0), incrementa (1), incrementa
						(2), imprime (2), multiplica (4), imprime (4),
						decrementa (3), imprime (3).
					</p>
					<h3 className="text-yellow-300">** Tu desafío: **</h3>
					<p>
						Desarrolla un mini compilador que tome una cadena de
						texto y devuelva otra cadena de texto con el resultado
						de ejecutar el programa.
					</p>
				</div>
			</div>
			<SolucionReto2 />
		</main>
	);
}

export default Reto_2;
