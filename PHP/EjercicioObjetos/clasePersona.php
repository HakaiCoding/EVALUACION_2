<?php
	class Persona{
		// Atributos 
		protected  $nombre;
		protected  $apellidos;
		protected  $codPostal;

		// Constructor
		public function __construct($nomb,$apell,$codPos){
			$this->nombre = $nomb;
			$this->apellidos = $apell;
			$this->codPostal = $codPos;
		}


		// Metodos
		public function getNombre(){
			return $this->nombre;
		}
		public function getApellidos(){
			return $this->apellidos;
		}
		public function getCodPostal(){
			return $this->codPostal;
		}

		public function setNombre($nom){
			//$nombre=$_POST["nombre"];
			$this->nombre=$nom;
		}
		public function setApellidos($ape){
			//$apellidos=$_POST["apellidos"];
			$this->apellidos=$ape;
		}
		public function setCodPostal($cp){

			//$codPostal=$_POST["codPostal"];
			$this->codPostal=$cp;
		}
	}
?>