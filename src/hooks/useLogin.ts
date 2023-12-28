import {useMutation} from "@tanstack/react-query";
import {LoginInterface} from "../interfaces/interfaces";
import {loginApi} from "../api/login-api";


export const useLogin = (success: any, ...path: any) => {
    return useMutation({
        mutationKey: ["loginMutation"],
        mutationFn: (body: LoginInterface) => {
            return loginApi(body);
        },
        onSuccess: () => success(...path)
    })
}