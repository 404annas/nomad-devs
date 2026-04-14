import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export interface User {
  name: string;
  email: string;
  role: string;
}

export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: user, isLoading, error } = useQuery<User>({
    queryKey: ["auth-me"],
    queryFn: async () => {
      const { data } = await api.get("/auth/me");
      return data.data;
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await api.post("/auth/logout");
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth-me"], null);
      toast.success("Logged out successfully");
      router.push("/dashboard/login");
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    logout: logoutMutation.mutate,
    isLoggingOut: logoutMutation.isPending,
  };
};
