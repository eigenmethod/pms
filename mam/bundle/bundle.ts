namespace $ {

	/** Makes one bundle from all required sources. */
	export class $mam_bundle extends $mol_object2 {
		
		@ $mol_mem
		root() {
			return undefined as any as $mam_root
		}
		
		/** Used when the generated bundles should be the same for any slice of pack */
		@ $mol_mem_key
		generated_for_pack( pack: $mam_package ) {
			return [] as $mol_file[]
		}

		/** Generated bundle by slice */
		@ $mol_mem_key
		generated( slice : $mam_slice ) {
			return this.generated_for_pack( slice.pack() )
		}

		log( target : $mol_file , duration : number ) {

			const path = target.relate( this.root().dir() )
			
			this.$.$mol_log3_done({
				place: this ,
				duration: `${duration}ms` ,
				message: `Built` , 
				path ,
			})

		}
		
	}

}