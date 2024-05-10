import { Project } from '../entities/project.entity';
import { UpdateProjectDto } from 'src/projects/application/dto/update-project.dto';
export interface UpdateProjectPartialPort {
    updateProjectPartial(id: string, updateProjectPartialDto: UpdateProjectDto): Promise<Project>;
}
