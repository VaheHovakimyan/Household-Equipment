import {useMutation} from "@tanstack/react-query";
import {registerApi} from "../api/register-api";
import {RegisterInterface} from "../interfaces/interfaces";


export const useRegister = (success: any, ...path: any) => {
    return useMutation({
        mutationKey: ["registerMutation"],
        mutationFn: (body: RegisterInterface) => {
            return registerApi(body);
        },
        onSuccess: () => success(...path)
    })
}