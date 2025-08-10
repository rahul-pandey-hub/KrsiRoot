export default function StatCard({ target, title, description, color }: {
    target: number;
    title: string;
    description: string;
    color: string;
  }) {
    return (
      <div className="stat-card bg-opacity-10 p-8 rounded-2xl text-center" style={{ backgroundColor: `${color}10` }}>
        <div 
          className="text-5xl font-bold mb-4 counter" 
          data-target={target}
          style={{ color: color }}
        >
          0
        </div>
        <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }