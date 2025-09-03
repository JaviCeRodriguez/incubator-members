import { MembersList } from '@/components/members/MembersList';
import { FeedbackForm } from '@/components/members/FeedbackForm';

export default function Members() {
  return (
    <main className="font-sans">
      <MembersList />
      <FeedbackForm />
    </main>
  );
}
