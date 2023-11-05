function CodemberTitle() {
	const message = `  
   
  /$$$$$$                /$$                      /$$                        
 /$$__  $$              | $$                     | $$                        
| $$  \\__/ /$$$$$$  /$$$$$$$ /$$$$$$ /$$$$$$/$$$$| $$$$$$$  /$$$$$$  /$$$$$$ 
| $$      /$$__  $$/$$__  $$/$$__  $| $$_  $$_  $| $$__  $$/$$__  $$/$$__  $$
| $$     | $$  \\ $| $$  | $| $$$$$$$| $$ \\ $$ \\ $| $$  \\ $| $$$$$$$| $$  \\__/
| $$    $| $$  | $| $$  | $| $$_____| $$ | $$ | $| $$  | $| $$_____| $$      
|  $$$$$$|  $$$$$$|  $$$$$$|  $$$$$$| $$ | $$ | $| $$$$$$$|  $$$$$$| $$      
 \\______/ \\______/ \\_______/\\_______|__/ |__/ |__|_______/ \\_______|__/`;

	/* const myName = `
  __               _____             __     
 |  |   ___ ___   |   __|___ ___ ___/_/___ 
 |  |__| -_| . |  |  |  | .'|  _|  _| | .'|
 |_____|___|___|  |_____|__,|_| |___|_|__,| 
    `; */
	return (
		<div className="w-fit m-auto">
			<div className="relative flex justify-center mb-4">
				<pre className="font-mono glow text-white text-[7px] sm:text-[10px] lg:text-[14px] xl:text-[16px] leading-none block overflow-hidden">
					{message}
				</pre>
			</div>
			{/* <div className="relative flex justify-center">
				<pre className="font-mono glow text-white text-[7px] sm:text-[10px] lg:text-[14px] xl:text-[16px] pl-4 leading-none block overflow-hidden">
					{myName}
				</pre>
			</div> */}
			<pre className="font-mono text-green-100">Leo García</pre>
		</div>
	);
}

export default CodemberTitle;
