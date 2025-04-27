/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * 
 * @author Guillermo González Pineda
 * @date 22/04/2025
 * @description Fichero cliente de la aplicación de Poker Game.
 */

import { GameController } from './controller/GameController';

/**
 * Función principal que inicializa el controlador del juego.
 */
function main() {
  const controller = new GameController('hand1', 'hand2', 'result', 'dealButton');
}

main();