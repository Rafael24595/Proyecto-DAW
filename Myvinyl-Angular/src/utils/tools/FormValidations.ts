import md5 from 'md5-hash';
import { ServerErrorForm, SingInForm, SingUpForm } from 'src/app/interfaces/AuthorizationInterfaces';

export class FormValidations{

    public static checkForErrors(userData:SingUpForm | SingInForm, formError:SingUpForm | SingInForm){

        let inputsName = Object.keys(formError);

        inputsName.forEach(input=>{

            switch (input) {

                case 'name':
                
                    formError[input] = (userData[input] == '') ? 'Nombre no válido' : '';
    
                    break;

                case 'email':
                
                    formError[input] = (!FormValidations.valideEmail(userData[input])) ? 'Email no válido' : '';
            
                    break;

                case 'password':
                
                    if(userData['repassword']){

                        formError[input] = (!FormValidations.validePasssword(userData[input])) ? 'Contraseña no válida' : '';

                    }
                    else{

                        formError[input] = (userData[input] == '') ? 'Contraseña no válida' : '';

                    }
                    
                     break;

                case 'repassword':
                
                    formError[input] = (!FormValidations.comparePasswords(userData['password'], userData['repassword'])) ? 'Las contraseñas no son iguales' : '';
            
                    break;
            
                default:
                    break;
            }

        });

        return formError;

    }

    public static checkErrors(formError:SingUpForm | SingInForm){

        let errorsFree = true;
        let inputsName = Object.keys(formError);
        let index = 0;

        while(index < inputsName.length && errorsFree == true){

            if(formError[inputsName[index]] != '') errorsFree = false;

            index++;

        }

        return errorsFree;
    }

    public static checkServerErrors(serverMessage:ServerErrorForm, formError:SingUpForm | SingInForm){

        formError[serverMessage.attribute] = serverMessage.message;

        return formError;

    }

    public static valideEmail(email:string){

        let validEmail:RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return validEmail.test(email.toLowerCase());

    }

    public static validePasssword(password:string){console.log(password);

        let validPassword:RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.,:;])\S{8,}$/;
        return validPassword.test(password);

    }

    public static comparePasswords(password:string, repassword:string){

        return (password == repassword) ? true : false;

    }

    public static hashPassword(password:string){

        return md5(password);

    }

    public static setErrorClass(id:string){
        document.getElementById(id)?.classList.add('input-error');
    }

    public static checkTags(tags:string){
        let tagsSplitted = tags.replace(/ /g, '').split(',');
        let tagsClean = [...new Set(tagsSplitted)];
        return tagsClean;
      }

}