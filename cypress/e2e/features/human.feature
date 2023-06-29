Feature: Human page

    Feature Complete the Human Onboarding form of celeri.
    Como usuario
    Quiero poder completar el formulario de Onboarding
    Para registrar mis datos correctamente

    Background:
        Given A web browser is at the celeri home page
    Scenario: Success Owner Onboarding
        When I select the type of account Humana
        And  I click on the Agregar button in the Titulares section
        And I select my document type as DNI
        And I enter my number of dni and cuil
        And I enter my first name and lastname
        And I select the nationality and gender
        And I select the civil state
        And I complete the section contact information
        And I complete the section legal domicilie
        And I select economic activity
        And I complete the section declaracion jurada
        And I select the Continuar button
        And I click on the Agregar button in the cuentas bancarias section
        And I click on bank national
        And I complete the section bank national
        And I click on the Agregar button in the perfil inversor section
        And I complete the section investor profile
        And I accept terms and policies 
        
    


   