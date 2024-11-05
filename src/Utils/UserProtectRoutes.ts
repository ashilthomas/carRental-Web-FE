import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import React from 'react';
import instance from '../Axios/Instance';

interface ProtectRouteProps {
    children: React.ReactNode;
}

const UserProtectRoutes: React.FC<ProtectRouteProps> = ({ children }) => {
    const navigate = useNavigate();
    const toast = useToast();
    const token = sessionStorage.getItem('token');
  
    useEffect(() => {
        const checkUser = async () => {
            try {
                const res = await instance.get("adduser/checkuser", {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Ensure proper format for token
                    },
                });

                const data = res.data;
                
                if (!data.success) {
                    navigate("/login", { replace: true });
                    toast({
                        title: data.message,
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                }
            } catch (error: any) {
                if (error.response && error.response.status === 403) {
                    toast({
                        title: "Unauthorized",
                        description: "You do not have permission to access this page.",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                    navigate("/login", { replace: true });
                } else {
                    toast({
                        title: error.response?.data?.message || "Error",
                        description: "Please login",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                    });
                    navigate("/login", { replace: true });
                }
            }
        };

        checkUser();
    }, [navigate, toast, token]);

    return children;
};

export default UserProtectRoutes;
