import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { PageLayout } from '../components/layout/PageLayout';

const AVATAR_COLORS = [
  { value: '#c9a84c', label: 'Gold' },
  { value: '#6b8ed1', label: 'Blue' },
  { value: '#4caf82', label: 'Green' },
  { value: '#9b6bbf', label: 'Purple' },
  { value: '#e05c5c', label: 'Red' },
  { value: '#e8a84c', label: 'Amber' },
];

function Avatar({ name, color, size = 64 }: { name: string; color: string; size?: number }) {
  const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  return (
    <div
      style={{ width: size, height: size, backgroundColor: color + '22', border: `2px solid ${color}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.35, fontWeight: 600, color }}
    >
      {initials}
    </div>
  );
}

export function ProfilePage() {
  const { user, updateProfile, signOut } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name ?? '');
  const [title, setTitle] = useState(user?.title ?? '');
  const [organization, setOrganization] = useState(user?.organization ?? '');
  const [avatarColor, setAvatarColor] = useState(user?.avatarColor ?? '#c9a84c');
  const [saved, setSaved] = useState(false);

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSave = async () => {
    await updateProfile({ name: name.trim() || user.name, title: title.trim() || undefined, organization: organization.trim() || undefined, avatarColor });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/courses');
  };

  const inputClass = `w-full bg-surface border border-border-gold rounded px-4 py-3 text-ink text-sm placeholder:text-muted/40 focus:outline-none focus:border-gold/60 transition-colors`;
  const labelClass = `block text-xs font-sans font-medium tracking-widest uppercase text-muted mb-2`;

  return (
    <PageLayout title="Profile">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-3xl text-ink mb-1">Profile</h1>
        <p className="text-muted text-sm mb-10">Manage your account and learning identity.</p>

        {/* Avatar */}
        <div className="bg-card border border-border-gold rounded-lg p-8 mb-6">
          <h2 className="font-sans text-xs font-medium tracking-widest uppercase text-muted mb-6">Avatar</h2>
          <div className="flex items-center gap-6 mb-6">
            <Avatar name={name || user.name} color={avatarColor} size={72} />
            <div>
              <p className="text-ink font-medium">{name || user.name}</p>
              <p className="text-muted text-sm">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {AVATAR_COLORS.map(c => (
              <button
                key={c.value}
                onClick={() => setAvatarColor(c.value)}
                title={c.label}
                style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: c.value, border: avatarColor === c.value ? `3px solid white` : '3px solid transparent', outline: avatarColor === c.value ? `2px solid ${c.value}` : 'none', cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="bg-card border border-border-gold rounded-lg p-8 mb-6">
          <h2 className="font-sans text-xs font-medium tracking-widest uppercase text-muted mb-6">Personal Information</h2>
          <div className="space-y-5">
            <div>
              <label className={labelClass}>Full Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Job Title</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Operations Manager" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Organization</label>
              <input type="text" value={organization} onChange={e => setOrganization(e.target.value)} placeholder="e.g. Acme Corp" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Email</label>
              <input type="email" value={user.email} disabled className={`${inputClass} opacity-40 cursor-not-allowed`} />
            </div>
          </div>
        </div>

        {/* Account */}
        <div className="bg-card border border-border-gold rounded-lg p-8 mb-8">
          <h2 className="font-sans text-xs font-medium tracking-widest uppercase text-muted mb-4">Account</h2>
          <p className="text-muted text-sm mb-1">Member since {new Date(user.joinedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p className="text-muted text-xs">User ID: {user.id.slice(0, 8)}…</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            className="bg-gold/10 border border-gold/40 text-gold font-sans text-xs font-medium tracking-widest uppercase px-8 py-3 rounded hover:bg-gold/20 transition-all duration-200"
          >
            {saved ? 'Saved!' : 'Save Changes'}
          </button>
          <button
            onClick={handleSignOut}
            className="border border-border-gold text-muted font-sans text-xs font-medium tracking-widest uppercase px-8 py-3 rounded hover:text-ink hover:border-ink/30 transition-all duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
