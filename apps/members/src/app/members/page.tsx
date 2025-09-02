import { MembersList } from '@/src/components/members/MembersList';
import { FeedbackForm } from '@/src/components/members/FeedbackForm';

export default function Members() {
  return (
    <main className="font-sans">
      <MembersList />
      <FeedbackForm />
    </main>
  );
}
