import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { InquiryType } from '../backend';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: InquiryType;
  message: string;
}

export function useSubmitContactInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error('Actor not initialized');
      const timestamp = BigInt(Date.now());
      await actor.submitContactInquiry(
        data.fullName,
        data.email,
        data.phone,
        data.subject,
        data.message,
        timestamp
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactInquiries'] });
    },
  });
}
