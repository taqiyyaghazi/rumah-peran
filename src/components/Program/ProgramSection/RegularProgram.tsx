import { inter } from '@/lib/fonts';
import { IProgram } from '@/types';
import ProgramCard from '../../ProgramCard';

interface Props {
  data: IProgram[];
}

const RegularProgram = ({ data }: Props) => {
  return (
    <div>
      <p className={`${inter.className} my-8 max-sm:text-xs`}>
        Kami menyediakan program yang bervariasi untuk mendukung pengembangan
        potensi dan memfasilitasi keunikan setiap individu
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((program, id) => (
          <ProgramCard key={id} data={program} type="regular" />
        ))}
      </div>
    </div>
  );
};

export default RegularProgram;
