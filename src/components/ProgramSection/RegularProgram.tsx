import { inter } from '@/lib/fonts';
import ProgramCard from '../ProgramCard';
import { readJson } from '@/lib';
import { IProgram } from '@/types';

interface Props {
  data: IProgram[];
}

const RegularProgram = async ({ data }: Props) => {
  return (
    <div>
      <p className={`${inter.className} my-8 max-sm:text-xs`}>
        Kami menyediakan program yang bervariasi untuk mendukung pengembangan
        potensi dan memfasilitasi keunikan setiap individu
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((program) => (
          <ProgramCard key={program.id} data={program} type="regular" />
        ))}
      </div>
    </div>
  );
};

export default RegularProgram;
