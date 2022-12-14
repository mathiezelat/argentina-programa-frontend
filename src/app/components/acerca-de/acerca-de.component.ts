import { Component, OnInit } from "@angular/core";
import { Persona } from "../../model/persona.model";
import { PersonaService } from "../../services/persona.service";
import { TokenService } from "../../services/token.service";

@Component({
  selector: "app-acerca-de",
  templateUrl: "./acerca-de.component.html",
  styleUrls: ["./acerca-de.component.css"],
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona("", "", "", "", "", "", "", "", "", "");

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService,
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
