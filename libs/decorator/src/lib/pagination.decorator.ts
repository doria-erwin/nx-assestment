import { applyDecorators } from "@nestjs/common"
import { ApiOkResponse, getSchemaPath } from "@nestjs/swagger"

export const PaginationResponse = (dto: any) => {
    return applyDecorators(
        ApiOkResponse({
            schema: {
                properties: {
                    itemCount : {
                        type: 'number'
                    },
                    pageCount:{
                        type: 'number'
                    },
                    data: {
                        type: 'array',
                        items: {
                            $ref: getSchemaPath(dto)
                        }
                    }
                }
            }
        })
    )
}