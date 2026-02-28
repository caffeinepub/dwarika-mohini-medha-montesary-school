import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from '../hooks/useTranslation';
import { useSubmitContactInquiry } from '../hooks/useQueries';
import { InquiryType } from '../backend';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle, AlertCircle, Send, Loader2 } from 'lucide-react';

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  subject: InquiryType;
  message: string;
}

export function ContactForm() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitContactInquiry();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      await mutation.mutateAsync(data);
      setSubmitted(true);
      reset();
    } catch {
      // error handled via mutation.isError
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-school-green/15 flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-school-green" />
        </div>
        <h3 className="font-heading font-bold text-foreground text-xl mb-2">
          {t.contact.successTitle}
        </h3>
        <p className="font-body text-muted-foreground max-w-sm">
          {t.contact.successMessage}
        </p>
        <Button
          variant="outline"
          className="mt-6 border-school-green text-school-green hover:bg-school-green/10"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div className="space-y-1.5">
        <Label htmlFor="fullName" className="font-body font-medium text-foreground">
          {t.contact.nameLabel} <span className="text-destructive">*</span>
        </Label>
        <Input
          id="fullName"
          placeholder={t.contact.namePlaceholder}
          className="font-body"
          {...register('fullName', { required: t.contact.validation.nameRequired })}
        />
        {errors.fullName && (
          <p className="text-destructive text-xs font-body flex items-center gap-1">
            <AlertCircle size={12} /> {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email" className="font-body font-medium text-foreground">
          {t.contact.emailLabel} <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder={t.contact.emailPlaceholder}
          className="font-body"
          {...register('email', {
            required: t.contact.validation.emailRequired,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t.contact.validation.emailInvalid,
            },
          })}
        />
        {errors.email && (
          <p className="text-destructive text-xs font-body flex items-center gap-1">
            <AlertCircle size={12} /> {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <Label htmlFor="phone" className="font-body font-medium text-foreground">
          {t.contact.phoneLabel} <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder={t.contact.phonePlaceholder}
          className="font-body"
          {...register('phone', {
            required: t.contact.validation.phoneRequired,
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: t.contact.validation.phoneInvalid,
            },
          })}
        />
        {errors.phone && (
          <p className="text-destructive text-xs font-body flex items-center gap-1">
            <AlertCircle size={12} /> {errors.phone.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <Label className="font-body font-medium text-foreground">
          {t.contact.subjectLabel} <span className="text-destructive">*</span>
        </Label>
        <Select
          onValueChange={(val) => setValue('subject', val as InquiryType, { shouldValidate: true })}
        >
          <SelectTrigger className="font-body">
            <SelectValue placeholder={t.contact.subjectPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={InquiryType.general} className="font-body">
              {t.contact.subjects.general}
            </SelectItem>
            <SelectItem value={InquiryType.admissions} className="font-body">
              {t.contact.subjects.admissions}
            </SelectItem>
            <SelectItem value={InquiryType.support} className="font-body">
              {t.contact.subjects.support}
            </SelectItem>
            <SelectItem value={InquiryType.other} className="font-body">
              {t.contact.subjects.other}
            </SelectItem>
          </SelectContent>
        </Select>
        {errors.subject && (
          <p className="text-destructive text-xs font-body flex items-center gap-1">
            <AlertCircle size={12} /> {t.contact.validation.subjectRequired}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="message" className="font-body font-medium text-foreground">
          {t.contact.messageLabel} <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder={t.contact.messagePlaceholder}
          rows={4}
          className="font-body resize-none"
          {...register('message', { required: t.contact.validation.messageRequired })}
        />
        {errors.message && (
          <p className="text-destructive text-xs font-body flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message.message}
          </p>
        )}
      </div>

      {/* Error */}
      {mutation.isError && (
        <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm font-body">
          <AlertCircle size={16} />
          {t.contact.errorMessage}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-saffron hover:bg-saffron-dark text-primary-foreground font-body font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
      >
        {mutation.isPending ? (
          <>
            <Loader2 size={16} className="animate-spin mr-2" />
            {t.contact.submitting}
          </>
        ) : (
          <>
            <Send size={16} className="mr-2" />
            {t.contact.submitButton}
          </>
        )}
      </Button>
    </form>
  );
}
