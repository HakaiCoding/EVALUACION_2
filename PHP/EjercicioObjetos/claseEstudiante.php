<?php require ('clasePersona.php');
	class Estudiante extends Persona{
		
		// Atributos 
		protected  $curso;

		// constructor
		public function __construct($nomb,$apell,$codPos,$curs){
			parent::__construct($nomb,$apell,$codPos);
			$this->curso=$curs;
		}

		

		// Metodos
		public function mostrarCurso(){
			return $this->curso;
		
		}

		public function sedeSegun($codigoPostal){
			if($codigoPostal=='28260'){
				return 'Galapagar';
			}else if($codigoPostal=='28400'){
				return 'Villalba';
			}else if($codigoPostal=='28250'){
				return 'Torrelodones';
			}else{
				return 'No se ubica su CP en nuestra BBDD';
			}
		}

	}
	$estudiante=new Estudiante($_POST["nombre"], $_POST["apellidos"], $_POST["codPostal"], $_POST["cursos"]);
	
	echo "<br>Nombre: " . $estudiante->getNombre();
	echo "<br>Apellidos: " . $estudiante->getApellidos();
	echo "<br>Barrio: " . $estudiante->sedeSegun($estudiante->getCodPostal());
	echo "<br>Curso: " . $estudiante->mostrarCurso();;
?>